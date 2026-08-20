import Link from "next/link";
import { client, BLOG_ENDPOINT, type Blog } from "@/lib/microcms";

export default async function BlogPage() {
  const { contents } = await client.getList<Blog>({ endpoint: BLOG_ENDPOINT });

  return (
    <ul>
      {contents.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
}
