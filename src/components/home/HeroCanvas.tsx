"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./HeroCanvas.module.css";

const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec2 uMouse;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv.x *= uResolution.x / uResolution.y;

    vec2 mouseInfluence = (uMouse - 0.5) * 0.3;
    float n = fbm(uv * 3.0 + uTime * 0.03 + mouseInfluence);

    float line = abs(fract(n * 6.0) - 0.5);
    float glow = smoothstep(0.02, 0.0, line);

    vec3 color = mix(vec3(0.098, 0.071, 0.059), vec3(0.851, 0.643, 0.361), glow * 0.6);
    gl_FragColor = vec4(color, glow * 0.5);
  }
`;

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uResolution: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      uniforms.uResolution.value.set(clientWidth, clientHeight);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let targetMouse = { x: 0.5, y: 0.5 };
    const handlePointerMove = (e: PointerEvent) => {
      targetMouse = {
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("pointermove", handlePointerMove);

    let frameId = 0;
    let running = true;
    const clock = new THREE.Clock();

    const tick = () => {
      if (!running) return;
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.lerp(
        new THREE.Vector2(targetMouse.x, targetMouse.y),
        0.05
      );
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const handleVisibility = () => {
      running = !document.hidden;
      if (running) frameId = requestAnimationFrame(tick);
      else cancelAnimationFrame(frameId);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.canvasWrap} aria-hidden="true" />
  );
}
