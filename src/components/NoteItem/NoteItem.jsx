import styles from "./NoteItem.module.css";
const NoteItem = ({ note, onDelete, onEdit }) => {
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
        <button type="button" onClick={() => onEdit(note.id)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default NoteItem;
