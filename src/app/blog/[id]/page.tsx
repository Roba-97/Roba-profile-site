import Link from "next/link";
import { notFound } from "next/navigation";
import { client, BLOG_ENDPOINT, type Blog } from "@/lib/microcms";
import { formatDate } from "@/lib/format";
import { Section } from "@/components/home/Section";
import styles from "./page.module.css";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await client
    .getListDetail<Blog>({ endpoint: BLOG_ENDPOINT, contentId: id })
    .catch(() => null);

  if (!blog) {
    notFound();
  }

  const publishedAt = blog.publishedAt ?? blog.createdAt;

  return (
    <main>
      <Section id="blog-detail" narrow>
        <Link className={styles.back} href="/blog">
          ← 記事一覧へ
        </Link>
        <article>
          <header className={styles.header}>
            <h1 className={styles.title}>{blog.title}</h1>
            <time className={styles.date} dateTime={publishedAt}>
              {formatDate(publishedAt)}
            </time>
          </header>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </Section>
    </main>
  );
}
