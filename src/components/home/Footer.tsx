import { links } from "@/lib/links";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>学び、広げていく</p>
      <p className={styles.sub}>小さな一歩が、いつか大きな道になる。</p>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
