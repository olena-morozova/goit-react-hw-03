import css from "./SearchBox.module.css";
export default function SearchBox({ filteredValue, onFilter }) {
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={filteredValue}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
