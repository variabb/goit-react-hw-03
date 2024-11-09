import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
function Contact({ contact, handleDeleteContact }) {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <IoPersonSharp /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button
        className={s.button}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
