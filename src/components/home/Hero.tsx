"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Section } from "./Section";
import { HeroLinks } from "./HeroLinks";
import styles from "./Hero.module.css";

export function Hero() {
  const statusRef = useRef<HTMLParagraphElement>(null);
  const handleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power2.out", duration: 0.65 } })
        .from(statusRef.current, { opacity: 0, y: 8 })
        .from(handleRef.current, { opacity: 0, y: 8 }, "-=0.25")
        .from(lineRef.current, { opacity: 0, y: 8 }, "-=0.25")
        .from(linksRef.current, { opacity: 0, y: 8 }, "-=0.25");
    });
    return () => ctx.revert();
  }, []);

  return (
    <Section id="hero" className={styles.hero}>
      <p className={styles.statusTag} ref={statusRef}>
        <span><b>status</b>: growing</span>
        <span><b>role</b>: 学生 → エンジニア（2027〜）</span>
      </p>
      <h1 className={styles.handle} ref={handleRef}>
        Roba<span className={styles.cursor}>_</span>
      </h1>
      <p className={styles.heroLine} ref={lineRef}>
        学んだ分だけ、進める道が増えていく。<br />
        その歩みを、一つずつ残していく場所。
      </p>
      <div ref={linksRef}><HeroLinks /></div>
    </Section>
  );
}
