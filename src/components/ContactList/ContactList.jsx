import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
/*import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}*/
