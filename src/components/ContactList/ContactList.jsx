import css from "./ContactList.module.css";
export default function ContactList({ items }) {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.cotent}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <button className={css.btnDel}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
