import { client, BLOG_ENDPOINT, type Blog } from "@/lib/microcms";
import { getArticleFeed } from "@/lib/feeds";

export type PostCategory = "blog" | "article";
export type BlogFilter = "all" | PostCategory;

export type UnifiedPost = {
  id: string;
  title: string;
  publishedAt: string;
  href: string;
  isExternal: boolean;
  category: PostCategory;
  source?: "note" | "zenn";
};

export async function getAllPosts(): Promise<UnifiedPost[]> {
  const [{ contents }, feedItems] = await Promise.all([
    client.getList<Blog>({
      endpoint: BLOG_ENDPOINT,
      queries: { orders: "-publishedAt", limit: 100 },
    }),
    getArticleFeed(),
  ]);

  const blogPosts: UnifiedPost[] = contents.map((post) => ({
    id: `microcms-${post.id}`,
    title: post.title,
    publishedAt: post.publishedAt ?? post.createdAt,
    href: `/blog/${post.id}`,
    isExternal: false,
    category: "blog",
  }));

  const articlePosts: UnifiedPost[] = feedItems.map((item) => ({
    id: `${item.source}-${item.link}`,
    title: item.title,
    publishedAt: item.publishedAt,
    href: item.link,
    isExternal: true,
    category: "article",
    source: item.source,
  }));

  return [...blogPosts, ...articlePosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function filterPosts(posts: UnifiedPost[], filter: BlogFilter): UnifiedPost[] {
  if (filter === "all") return posts;
  return posts.filter((post) => post.category === filter);
}
