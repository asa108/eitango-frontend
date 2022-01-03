import { parseCookies } from "@/helpers/index";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import FlashcardList from "@/components/FlashcardList";

export default function HomePage({ wordRe }) {
  console.log("wordRe", wordRe);
  return (
    <Layout>
      <h1>Home</h1>
      {wordRe.length === 0 && <h1>Not Words</h1>}
      <FlashcardList words={wordRe} />
    </Layout>
  );
}

// コースではgetStaticProps
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/words`);
//   const words = await res.json();
//   return {
//     props: { words, revalicate: 1 },
//   };
// }

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  console.log(token);

  const res = await fetch(`${API_URL}/words/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const wordRe = await res.json();

  const response = await fetch(`${API_URL}/words`);
  const words = await response.json();
  return {
    props: { words, wordRe },
  };
}
