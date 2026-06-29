import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <section className={styles.searchSection}>
      <input type="text" className={styles.inputSearch} placeholder="🔍 Find notes..." />
    </section>
  );
};

export default SearchBar;
