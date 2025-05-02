import css from "./ContactList.module.css";
export default function ContactList({ items, onDelete }) {
  return (
    <ul className={css.list}>
      {items.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.cotent}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <button className={css.btnDel} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
