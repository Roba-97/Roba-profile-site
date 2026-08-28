import { Section } from "./Section";
import { HeroLinks } from "./HeroLinks";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <p className={styles.statusTag}>
        <span><b>status</b>: growing</span>
        <span><b>role</b>: 学生 → エンジニア（2027〜）</span>
      </p>
      <h1 className={styles.handle}>
        Roba<span className={styles.cursor}>_</span>
      </h1>
      <p className={styles.heroLine}>
        学んだ分だけ、進める道が増えていく。<br />
        その歩みを、一つずつ残していく場所。
      </p>
      <HeroLinks />
    </Section>
  );
}
