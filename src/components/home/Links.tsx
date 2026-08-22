import { links } from '@/lib/links'
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Links.module.css";

export function Links() {
  return (
    <Section id="links" narrow>
      <SectionTitle>LINKS</SectionTitle>
      <ul className={styles.nodes}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              className={styles.node}
              href={link.href}
              target="_blank"
              rel="noopener"
            >
              {link.label} <span className={styles.arrow}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
