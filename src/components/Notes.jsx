import NoteForm from "./NoteForm/NoteForm";
import NoteList from "./NoteList/NoteList";
import styles from "./Notes.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { initialNotes } from "../notes";

const Notes = () => {
  return (
    <div className={styles.notesContainer}>
      <h1 className={styles.title}>My Notes</h1>

      <SearchBar />

      <NoteForm />

      <NoteList notes={initialNotes} />
    </div>
  );
};

export default Notes;
