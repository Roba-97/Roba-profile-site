import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Links.module.css";

const links = [
  { label: "GitHub", href: "https://github.com/Roba-97" },
  { label: "note", href: "https://note.com/r_obaoba" },
  { label: "Zenn", href: "https://zenn.dev/roba_97" },
  { label: "X (Twitter)", href: "https://x.com/r_obaoba" },
];

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
