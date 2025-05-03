import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.content}>
        <p className={css.line}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.line}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btnDel} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
