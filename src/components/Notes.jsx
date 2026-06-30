import NoteForm from "./NoteForm/NoteForm";
import NoteList from "./NoteList/NoteList";
import styles from "./Notes.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { initialNotes } from "../notes";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [editedNote, setEditedNote] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const handleSave = (formData) => {
    const data = {
      title: formData.title,
      content: formData.content,
    };

    if (editedNote) {
      setNotes((prev) =>
        prev.map((note) => (note.id === editedNote.id ? { ...note, ...data } : note)),
      );

      setEditedNote(null);
    } else {
      setNotes((prev) => [...prev, { id: crypto.randomUUID(), createdAt: Date.now(), ...data }]);
    }
  };

  const handleDelete = (noteId) => {
    const confirmDelete = window.confirm("Are you sure want to delete this note ?");

    {
      confirmDelete && setNotes((prev) => prev.filter((note) => note.id !== noteId));
    }
  };

  const handleEdit = (noteId) => {
    const updatedData = notes.find((note) => note.id === noteId);
    setEditedNote(updatedData);
  };

  const handleCancel = () => {
    setEditedNote(null);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className={styles.notesContainer}>
      <h1 className={styles.title}>My Notes</h1>

      <SearchBar onSearch={handleSearch} keyword={searchKeyword} />

      <NoteForm onSave={handleSave} editedNote={editedNote} onCancel={handleCancel} />

      <NoteList notes={filteredNotes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default Notes;
