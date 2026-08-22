import Link from "next/link";
import { client, BLOG_ENDPOINT, type Blog as BlogPost } from "@/lib/microcms";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Blog.module.css";

function formatDate(isoString: string) {
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

export async function Blog() {
  const { contents } = await client.getList<BlogPost>({
    endpoint: BLOG_ENDPOINT,
    queries: { limit: 3, orders: "-publishedAt" },
  });

  return (
    <Section id="blog" narrow>
      <div className={styles.head}>
        <SectionTitle className={styles.headTitle}>BLOG</SectionTitle>
        <Link className={styles.moreLink} href="/blog">
          もっと見る →
        </Link>
      </div>
      <ul className={styles.list}>
        {contents.map((post) => {
          const publishedAt = post.publishedAt ?? post.createdAt;
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <span className={styles.nodeMark} aria-hidden="true" />
                <span className={styles.title}>{post.title}</span>
                <time className={styles.date} dateTime={publishedAt}>
                  {formatDate(publishedAt)}
                </time>
                <span className={styles.go}>→</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
