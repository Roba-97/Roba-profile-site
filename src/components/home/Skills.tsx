import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Skills.module.css";

const skillGroups = [
  { label: "Language", items: ["HTML", "CSS", "JavaScript", "Ruby"], accent: "var(--terracotta)" },
  { label: "Framework", items: ["Ruby on Rails"], accent: "var(--amber)" },
  { label: "Tool", items: ["Git"], accent: "var(--rust)" },
];

export function Skills() {
  return (
    <Section id="skills" narrow>
      <SectionTitle>SKILLS</SectionTitle>
      <dl className={styles.list}>
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className={styles.row}
            style={{ "--drop": group.accent } as React.CSSProperties}
          >
            <dt className={styles.term}>{group.label}</dt>
            <dd className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
