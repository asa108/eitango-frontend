import Flashcard from "./Flashcard";

export default function FlashcardList({ words }) {
  return (
    <div className="">
      {words.map((word) => {
        return <Flashcard word={word} key={word.id} />;
      })}
    </div>
  );
}
