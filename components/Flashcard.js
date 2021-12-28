import { useState } from "react";
import styles from "@/styles/Flascard.module.css";

export default function Flashcard({ word }) {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div
      className={`${styles.card} ${flip ? `${styles.flip}` : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.front}>{word.english}</div>
      <div className={styles.back}>{word.japanese}</div>
    </div>
  );
}
