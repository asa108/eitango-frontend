import { parseCookies } from "@/helpers/index";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import FlashcardList from "@/components/FlashcardList";

export default function HomePage({ words, wordRe }) {
  console.log("wordRe", wordRe);
  return (
    <Layout>
      <h1>Home</h1>
      {words.length === 0 && <h1>Not Words</h1>}
      <FlashcardList words={words} />
    </Layout>
  );
}

// コースではgetStaticProps
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/words`);
  const words = await res.json();
  return {
    props: { words, revalicate: 1 },
  };
}
