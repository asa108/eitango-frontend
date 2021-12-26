import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={keywords} />
      </Head>
      <Header />
      <SideBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Eitango | Learn English",
  description: "Learn English efficiency",
  keywords: "english, language learning,",
};
