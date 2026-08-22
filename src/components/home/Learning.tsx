import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Learning.module.css";

const learningPosts = [
  { title: "学び始めて2週間で気づいたこと", href: "https://note.com/YOUR_USERNAME/n_xxxxxxxx", platform: "note" },
  { title: "エンジニアを目指す前に読んだ3冊", href: "https://note.com/YOUR_USERNAME/n_xxxxxxxx", platform: "note" },
  { title: "初めてのOSSコントリビュート記録", href: "https://note.com/YOUR_USERNAME/n_xxxxxxxx", platform: "note" },
  { title: "配属前にやっておきたい基礎固め", href: "https://note.com/YOUR_USERNAME/n_xxxxxxxx", platform: "note" },
];

export function Learning() {
  return (
    <Section id="learning" narrow>
      <SectionTitle>NOW LEARNING</SectionTitle>
      <ul className={styles.list}>
        {learningPosts.map((post) => (
          <li key={post.title}>
            <a href={post.href} target="_blank" rel="noopener">
              <span className={styles.nodeMark} aria-hidden="true" />
              <span className={styles.title}>{post.title}</span>
              <span className={styles.platform}>{post.platform}</span>
              <span className={styles.go}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
