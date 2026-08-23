import Parser from "rss-parser";

type CustomItem = {
  thumbnail?: string;
};

const parser = new Parser<Record<string, unknown>, CustomItem>({
  customFields: {
    item: [["media:thumbnail", "thumbnail"]],
  },
});

export type LearningPost = {
  title: string;
  link: string;
  thumbnail: string | null;
  publishedAt: string;
  source: "note" | "zenn";
};

async function fetchFeed(url: string, source: "note" | "zenn"): Promise<LearningPost[]> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const feed = await parser.parseString(xml);

    return feed.items.map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      thumbnail: source === "note" ? (item.thumbnail ?? null) : (item.enclosure?.url ?? null),
      publishedAt: item.isoDate ?? item.pubDate ?? "",
      source,
    }));
  } catch {
    return [];
  }
}

export async function getLearningFeed(): Promise<LearningPost[]> {
  const [noteItems, zennItems] = await Promise.all([
    fetchFeed("https://note.com/r_obaoba/rss", "note"),
    fetchFeed("https://zenn.dev/roba_97/feed", "zenn"),
  ]);

  return [...noteItems, ...zennItems]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);
}
