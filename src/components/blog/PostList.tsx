import Link from "next/link";
import { formatDate } from "@/lib/format";
import styles from "./PostList.module.css";

export type PostListItem = {
  id: string;
  title: string;
  publishedAt: string;
  href: string;
  isExternal?: boolean;
  source?: "note" | "zenn";
};

function PostMark({ source }: { source?: "note" | "zenn" }) {
  if (source === "note") {
    return (
      <span className={`${styles.mark} ${styles.markNote}`} aria-hidden="true">
        n
      </span>
    );
  }
  if (source === "zenn") {
    return (
      <span className={`${styles.mark} ${styles.markZenn}`} aria-hidden="true">
        Z
      </span>
    );
  }
  return <span className={styles.nodeMark} aria-hidden="true" />;
}

export function PostList({ posts }: { posts: PostListItem[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        const content = (
          <>
            <PostMark source={post.source} />
            <span className={styles.title}>{post.title}</span>
            <time className={styles.date} dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span className={styles.go}>→</span>
          </>
        );
        return (
          <li key={post.id}>
            {post.isExternal ? (
              <a href={post.href} target="_blank" rel="noopener">
                {content}
              </a>
            ) : (
              <Link href={post.href}>{content}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
