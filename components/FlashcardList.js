import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import styles from "@/styles/FlashcardList.module.css";

export default function FlashcardList({ words }) {
  const [idx, setIdx] = useState(0);
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);

  const totalWords = words.length;
  let wd = words[idx];

  useEffect(() => {
    checkIndex();
  });

  const next = () => {
    if (idx + 1 === totalWords) {
      setDisable(true);
    } else {
      setIdx(idx + 1);
      console.log(idx);
    }
  };

  const back = () => {
    if (idx === 0) {
      setDisable(true);
    } else {
      setIdx(idx - 1);
      console.log(idx);
    }
  };

  const checkIndex = () => {
    if (idx === 0) {
      setLeftDisable(true);
    } else if (idx + 1 === totalWords) {
      setRightDisable(true);
    } else {
      setRightDisable(false);
      setLeftDisable(false);
    }
  };

  return (
    <div className={styles.container}>
      <Flashcard word={wd} key={wd.id} />
      <div className={styles.icons}>
        <FaChevronLeft
          className={`${styles.arrow} ${
            leftDisable ? `${styles.disable}` : ""
          }`}
          onClick={back}
        />
        <span>
          {idx + 1} / {totalWords}
        </span>
        <FaChevronRight
          className={`${styles.arrow} ${
            rightDisable ? `${styles.disable}` : ""
          }`}
          onClick={next}
        />
      </div>
    </div>
  );
}


