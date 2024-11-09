// import s from "./ContactList.module.css";

import Contact from "../Contact/Contact";

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
           
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </div>
  );
}

export default ContactList;