import { client, BLOG_ENDPOINT, type Blog } from "@/lib/microcms";

export default async function BlogPage() {
  const { contents } = await client.getList<Blog>({ endpoint: BLOG_ENDPOINT });

  console.log(contents);

  return (
    <ul>
      {contents.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
}
