"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PathRail.module.css";

const railItems = [
  { id: "hero", label: "はじめに", accent: "var(--terracotta)" },
  { id: "about", label: "わたしについて", accent: "var(--amber)" },
  { id: "links", label: "リンク一覧", accent: "var(--rust)" },
  { id: "blog", label: "ブログ", accent: "var(--amber)" },
  { id: "skills", label: "できること", accent: "var(--terracotta)" },
  { id: "learning", label: "これまでの学び", accent: "var(--amber)" },
];

export function PathRail() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!trackRef.current || reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className={styles.rail} aria-label="セクション">
      <div className={styles.track} ref={trackRef} aria-hidden="true" />
      <ol>
        {railItems.map((item) => (
          <li
            key={item.id}
            className={item.id === activeId ? styles.active : undefined}
            style={{ "--drop": item.accent } as React.CSSProperties}
          >
            <a href={`#${item.id}`}>
              <span className={styles.tooltip} aria-hidden="true">{item.label}</span>
              <span className="visually-hidden">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
