import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Links } from "@/components/home/Links";
import { Blog } from "@/components/home/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Links />
      <Blog />
    </main>
  );
}
