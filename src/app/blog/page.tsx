import Link from "next/link";
import { Section } from "@/components/home/Section";
import { SectionTitle } from "@/components/home/SectionTitle";
import { PostList } from "@/components/blog/PostList";
import { getAllPosts, filterPosts, type BlogFilter } from "@/lib/posts";
import styles from "./page.module.css";

const TAGS: { label: string; value: BlogFilter }[] = [
  { label: "全て", value: "all" },
  { label: "ブログ", value: "blog" },
  { label: "記事", value: "article" },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter: rawFilter } = await searchParams;
  const filter: BlogFilter =
    rawFilter === "blog" || rawFilter === "article" ? rawFilter : "all";

  const posts = await getAllPosts();
  const filtered = filterPosts(posts, filter);

  return (
    <main>
      <Section id="blog-list" narrow>
        <div className={styles.head}>
          <SectionTitle className={styles.headTitle}>BLOG</SectionTitle>
          <nav className={styles.tags} aria-label="記事の絞り込み">
            {TAGS.map((tag) => {
              const href = tag.value === "all" ? "/blog" : `/blog?filter=${tag.value}`;
              const isActive = filter === tag.value;
              return (
                <Link
                  key={tag.value}
                  href={href}
                  className={`${styles.tag} ${isActive ? styles.tagActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tag.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {filtered.length > 0 ? (
          <PostList posts={filtered} />
        ) : (
          <p className={styles.empty}>該当する記事はまだありません。</p>
        )}
      </Section>
    </main>
  );
}
