import { useState } from "react";
import styles from "@/styles/Flascard.module.css";
import Link from "next/link";
import {
  FaPencilAlt,
  FaTrashAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

export default function Flashcard({ word, totalWords }) {
  const router = useRouter();
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };

  const handleDelete = async (e) => {
    // if (confirm("Are you sure?")) {
    const res = await fetch(`${API_URL}/words/${word.id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("error");
    } else {
      router.push("/");
    }
    // }
  };

  const next = () => {
    console.log("word", word.id);
    const id = word.id;
    // word.slice(0, id + 1);
  };

  return (
    <div>
      <div
        className={`${styles.card} ${flip ? `${styles.flip}` : ""}`}
        onClick={handleFlip}
      >
        <div className={styles.front}>{word.english}</div>
        <div className={styles.back}>{word.japanese}</div>
      </div>
      <Link href={`/edit/${word.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt />
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(word.id)}
      >
        <FaTrashAlt />
      </a>
      <FaChevronLeft /> 3 / {totalWords}
      <FaChevronRight onClick={next} />
    </div>
  );
}
