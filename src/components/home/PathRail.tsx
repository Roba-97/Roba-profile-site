"use client"

import { useEffect, useState } from "react";
import styles from "./PathRail.module.css";

const railItems = [
  { id: "hero", label: "Who am I", accent: "var(--terracotta)" },
  { id: "about", label: "About", accent: "var(--amber)" },
  { id: "links", label: "Links", accent: "var(--rust)" },
  { id: "blog", label: "Blog", accent: "var(--amber)" },
  { id: "skills", label: "Skills", accent: "var(--terracotta)" },
  { id: "learning", label: "Now Learning", accent: "var(--amber)" },
];

export function PathRail() {
  const [activeId, setActiveId] = useState<string | null>(null);

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

  return (
    <nav className={styles.rail} aria-label="セクション">
      <ol>
        {railItems.map((item) => (
          <li
            key={item.id}
            className={item.id === activeId ? styles.active : undefined}
            style={{ "--drop": item.accent } as React.CSSProperties}
          >
            <a href={`#${item.id}`}>
              <span className="visually-hidden">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
