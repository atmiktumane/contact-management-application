import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddContactPage, ContactDetailsPage, ContactListPage } from "../pages";

export const AllRoutes = () => {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const addContactHandler = (contact) => {
    // console.table(contact);

    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const clearAllHandler = () => {
    setContacts([]);
  };

  useEffect(() => {
    // console.table(contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContactListPage
            contacts={contacts}
            getContactId={removeContactHandler}
            clearAllHandler={clearAllHandler}
          />
        }
      />

      <Route
        path="/add-contact"
        element={<AddContactPage addContactHandler={addContactHandler} />}
      />

      <Route path="/contact/:id" element={<ContactDetailsPage />} />
    </Routes>
  );
};
