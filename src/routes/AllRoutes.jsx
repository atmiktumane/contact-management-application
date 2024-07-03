import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddContactPage,
  ContactDetailsPage,
  ContactListPage,
  FavouriteContactsPage,
} from "../pages";

export const AllRoutes = () => {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const addContactHandler = (contact) => {
    // console.table(contact);

    setContacts([...contacts, contact]);
  };

  const clearAllContactsHandler = () => {
    setContacts([]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    // console.table(contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const defaultContact = { name: "user1", email: "user1@example.com" };
    setContacts([...contacts, defaultContact]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContactListPage
            contacts={contacts}
            clearAllContactsHandler={clearAllContactsHandler}
            deleteContactHandler={deleteContactHandler}
          />
        }
      />

      <Route
        path="/add-contact"
        element={<AddContactPage addContactHandler={addContactHandler} />}
      />

      <Route path="/contact/:id" element={<ContactDetailsPage />} />

      <Route path="/favourite" element={<FavouriteContactsPage />} />
    </Routes>
  );
};
