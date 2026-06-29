import styles from "./NoteItem.module.css";
const NoteItem = ({ note }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <p>{formattedDate}</p>

      <div className={styles.buttonGroup}>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </>
  );
};

export default NoteItem;
