import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" narrow>
      <SectionTitle>ABOUT</SectionTitle>
      <div className={styles.copy}>
        <p className={styles.lead}>はじめまして、Roba です。</p>
        <p>
          今は学生として、技術を学びながら少しずつできることを増やしています。
        </p>
        <p>
          来年からは、社会人教育事業を運営する会社で、エンジニアとして働きます。
        </p>
        <p>
          人が学ぶことで、新しい選択肢を手にできる。新しい繋がりができる。そんな場所を技術の側から支えていきたいと思っています。
        </p>
        <p>
          そのためにも、まずは自分自身が「学び続けること」を実践していたい。
        </p>
        <p>
          そしてそれを、記録し共有する。自分の進んでいく過程を残していきます。
        </p>
        <p>
          新しい学びを始める人、学び続ける人との繋がりを生む、そんな場所としてあれるよう、「卒業」なく学びを続けていきます。
        </p>
      </div>
    </Section>
  );
}
