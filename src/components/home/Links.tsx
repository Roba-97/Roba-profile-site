import { Icon } from "@/components/icons/Icon";
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
              aria-label={`${link.label}: ${link.role}`}
            >
              <Icon icon={link.icon} className={styles.icon} aria-hidden="true" />
              <span className={styles.role} aria-hidden="true">{link.role}</span>
              <Icon icon="solar:arrow-right-up-linear" className={styles.arrow} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
