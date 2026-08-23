import Link from "next/link";
import { client, BLOG_ENDPOINT, type Blog as BlogPost } from "@/lib/microcms";
import { PostList } from "@/components/blog/PostList";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import styles from "./Blog.module.css";

export async function Blog() {
  const { contents } = await client.getList<BlogPost>({
    endpoint: BLOG_ENDPOINT,
    queries: { limit: 3, orders: "-publishedAt" },
  });

  const posts = contents.map((post) => ({
    id: post.id,
    title: post.title,
    publishedAt: post.publishedAt ?? post.createdAt,
    href: `/blog/${post.id}`,
  }));

  return (
    <Section id="blog" narrow>
      <div className={styles.head}>
        <SectionTitle className={styles.headTitle}>BLOG</SectionTitle>
        <Link className={styles.moreLink} href="/blog">
          もっと見る →
        </Link>
      </div>
      <PostList posts={posts} />
    </Section>
  );
}
