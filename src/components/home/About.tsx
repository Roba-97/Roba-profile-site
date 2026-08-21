import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about">
      <div className={styles.inner}>
        <SectionTitle>ABOUT</SectionTitle>
        <div className={styles.copy}>
          <p className={styles.lead}> はじめまして、Roba です。</p>
          <p>まだ肩書きと呼べるものはありません。学生としての立場から、一歩ずつ技術を学んでいる最中です。</p>
          <p>来年からは、学びを通じて人の人生の選択肢を広げる仕事に携わります。社会人教育プラットフォームを運営する会社で、エンジニアとして働きます。</p>
          <p>だからこそ、まず自分自身がその過程を体現していたい。学んだことをひとつずつ道しるべに変えて、ここに残していきます。</p>
          <p>完成された実績よりも、これから伸びていく途中の姿を、同じ道を歩く仲間たちに見てもらえたら嬉しいです。</p>
        </div>
      </div>
    </Section>
  );
}
