import { Icon } from "@/components/icons/Icon";
import { links } from "@/lib/links";
import styles from "./HeroLinks.module.css";

export function HeroLinks() {
  const featured = links.filter((link) => link.heroFeatured);

  return (
    <ul className={styles.list} aria-label="主なリンク">
      {featured.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={link.label}
          >
            <Icon icon={link.icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
