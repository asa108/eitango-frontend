import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import {
  FaPencilAlt,
  FaTrashAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

export default function FlashcardList({ words }) {
  return (
    <div>
      <div>
        {words.map((word) => {
          return <Flashcard word={word} key={word.id} />;
        })}
      </div>
    </div>
  );
}

// <FaChevronLeft />
// <FaChevronRight />
