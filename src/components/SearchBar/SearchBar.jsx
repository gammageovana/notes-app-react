import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, keyword }) => {
  return (
    <section className={styles.searchSection}>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="🔍 Find notes..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </section>
  );
};

export default SearchBar;
