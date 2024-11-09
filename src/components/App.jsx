import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";


function App() {
 const [contacts, setContacts] = useState(() => {
   const savedContacts = localStorage.getItem("contacts");
   return savedContacts
     ? JSON.parse(savedContacts)
     : [
         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
       ];
 });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
   const handleDeleteContact = (id) => {
     setContacts((prev) => prev.filter((contact) => contact.id !== id));
   };
 
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name &&
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        setContacts={setContacts}
        inputValue={inputValue}
        contacts={contacts}
      />
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleChange={handleChange}
      />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
