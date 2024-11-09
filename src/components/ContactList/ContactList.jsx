// import s from "./ContactList.module.css";

import Contact from "../Contact/Contact";

function ContactList({ contacts, setContacts }) {
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            setContacts={setContacts}
          />
        );
      })}
    </div>
  );
}

export default ContactList;