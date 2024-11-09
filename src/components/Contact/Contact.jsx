import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
function Contact({ contact, setContacts }) {
  const handleDeleteContact = () => {
    setContacts((prev) => prev.filter((item) => item.id !== contact.id));
  };
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
      <button className={s.button} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
