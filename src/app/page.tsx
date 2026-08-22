import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Links } from "@/components/home/Links";
import { Blog } from "@/components/home/Blog";
import { Skills } from "@/components/home/Skills";
import { Learning } from "@/components/home/Learning";
import { Footer } from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Links />
        <Blog />
        <Skills />
        <Learning />
      </main>
      <Footer />
    </>
  );
}
