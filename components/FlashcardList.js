import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import {
  FaPencilAlt,
  FaTrashAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

export default function FlashcardList({ words }) {
  // const def1 = -1;
  // const def2 = 0;
  // let wd = words.slice(def1, def2);

  // const next = (e) => {
  //   let wd = words.slice(def1 + 1, def2 + 1);
  // };

  const totalWords = words.length;
  return (
    <div>
      <div>
        {words.map((word) => {
          return (
            <Flashcard word={word} key={word.id} totalWords={totalWords} />
          );
        })}
      </div>
    </div>
  );
}

// <FaChevronLeft />
// <FaChevronRight />
