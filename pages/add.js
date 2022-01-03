import { parseCookies } from "@/helpers/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "regenerator-runtime";

export default function AddWordPage({ token }) {
  const [values, setValues] = useState({
    english: "",
    japanese: "",
    check1: false,
    check2: false,
    check3: false,
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("fill out all!");
    }

    const res = await fetch(`${API_URL}/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No token included");
        return;
      }

      toast.error("Something went wrong");
    } else {
      const data = await res.json();
      router.push("/");
      // router.push(`/events/${evt.slug}`)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title="Add new word">
      <Link href="/">Go Back</Link>
      <h1>Add Words</h1>
      <ToastContainer />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="english">English</label>
            <input
              type="text"
              id="english"
              name="english"
              value={values.english}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="japanese">Japanese</label>
            <input
              type="text"
              id="japanese"
              name="japanese"
              value={values.japanese}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <input type="submit" value="Add Word" className={styles.button} />
      </form>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
