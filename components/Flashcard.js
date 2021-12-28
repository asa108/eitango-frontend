import { useState } from "react";
import styles from "@/styles/Flascard.module.css";

export default function Flashcard({ word }) {
  console.log(word.back);
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div
      className={`${styles.card} ${flip ? `${styles.flip}` : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.front}>{word.front}</div>
      <div className={styles.back}>{word.back}</div>
    </div>
  );
}
