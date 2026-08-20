import { createClient, type MicroCMSListContent} from "microcms-js-sdk";

export const BLOG_ENDPOINT = "blogs";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Blog = {
  title: string;
  content: string;
  eyecatch?: Eyecatch;
} & MicroCMSListContent;
