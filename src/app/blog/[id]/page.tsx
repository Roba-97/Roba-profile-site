
import { client, BLOG_ENDPOINT, type Blog } from "@/lib/microcms";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await client.getListDetail<Blog>({
    endpoint: BLOG_ENDPOINT,
    contentId: id,
  });

  return (
    <article>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
}
