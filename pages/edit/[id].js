import { parseCookies } from "@/helpers/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditWordPage({ wd, token }) {
  const [values, setValues] = useState({
    english: wd.english,
    japanese: wd.japanese,
    check1: wd.check1,
    check2: wd.check2,
    check3: wd.check3,
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

    const res = await fetch(`${API_URL}/words/${wd.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Unauthorized");
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

        <input type="submit" value="Update Word" className={styles.button} />
      </form>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/words/${id}`);
  const wd = await res.json();

  return {
    props: {
      wd,
      token,
    },
  };
}
