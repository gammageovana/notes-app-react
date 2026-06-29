import NoteItem from "../NoteItem/NoteItem";
import styles from "./NoteList.module.css";

const NoteList = ({ notes }) => {
  return (
    <>
      <section className={styles.listSection}>
        {notes.map((note) => (
          <div className={styles.noteItem} key={note.id}>
            <NoteItem note={note} />
          </div>
        ))}
      </section>
      <p className={styles.totalNotes}>Total Notes : {notes.length}</p>
    </>
  );
};

export default NoteList;
