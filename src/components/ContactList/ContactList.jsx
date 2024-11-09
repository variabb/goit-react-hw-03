// import s from "./ContactList.module.css";

import Contact from "../Contact/Contact";

function ContactList({contacts}) {
  return (
      <div>
          { contacts.map((contact) => {
            return <Contact contact={contact} key={contact.id} />;
          }
            )
          
        }
    </div>
  );
}

export default ContactList;