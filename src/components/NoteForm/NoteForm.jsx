import styles from "./NoteForm.module.css";

const NoteForm = () => {
  return (
    <section className={styles.formSection}>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content"></textarea>
        </div>

        <div className={styles.formGroup}>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
};

export default NoteForm;
