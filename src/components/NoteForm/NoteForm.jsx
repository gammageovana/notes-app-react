import { useEffect, useState } from "react";
import styles from "./NoteForm.module.css";

const NoteForm = ({ onSave, editedNote, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (editedNote) {
      setFormData({
        title: editedNote.title,
        content: editedNote.content,
      });
    }
  }, [editedNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
    formReset();
  };

  const handleCancel = () => {
    formReset();
    onCancel();
  };

  const formReset = () => {
    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <section className={styles.formSection}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <button type="submit">{editedNote ? "Update" : "Save"}</button>
          {editedNote && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default NoteForm;
