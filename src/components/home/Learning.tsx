import Link from "next/link";
import Image from "next/image";
import { getLearningFeed } from "@/lib/feeds";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Learning.module.css";

export async function Learning() {
  const posts = await getLearningFeed();
  return (
    <Section id="learning" narrow>
      <div className={styles.head}>
        <SectionTitle className={styles.headTitle}>RECENT LEARNING</SectionTitle>
        <Link className={styles.moreLink} href="/blog?filter=article">
          もっと見る →
        </Link>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <a
            key={post.link}
            className={styles.card}
            href={post.link}
            target="_blank"
            rel="noopener"
          >
            {post.thumbnail && (
              <div className={styles.thumbnailWrap}>
                <Image
                  src={post.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, 300px"
                  className={styles.thumbnail}
                />
              </div>
            )}
            <span className={styles.platform}>
              {post.source === "note" ? "note" : "Zenn"}
            </span>
            <h3>{post.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
}
