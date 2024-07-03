import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components";

export const ContactListPage = (props) => {
  // console.log(props);

  const [showContacts, setShowContacts] = useState(true);

  const getContactId = (id) => {
    props.deleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard key={index} contact={contact} getContactId={getContactId} />
    );
  });

  const clearAllContacts = (a) => {
    props.clearAllContactsHandler();
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-3">
      <div className="min-h-24 w-full bg-slate-800 p-4">
        <div className="flex justify-between mb-5">
          <h3 className="text-2xl text-white font-semibold">Contact List</h3>
          <div>
            <span className="h-7 w-7 bg-gray-300 flex items-center justify-center rounded-full mt-1">
              {props.contacts.length}
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <Link
            to="/add-contact"
            className="bg-emerald-500 hover:bg-emerald-700 px-3 py-1 rounded-full text-white"
          >
            Add Contact
          </Link>
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="bg-sky-500 hover:bg-sky-700 px-3 py-1 rounded-full text-white"
          >
            {showContacts ? "Hide Contacts" : "Show Contacts"}
          </button>

          <button
            onClick={() => {
              return (
                window.confirm(
                  "Are you sure, you want to Delete All Contacts ?"
                ) && clearAllContacts(1)
              );
            }}
            className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-full text-white"
          >
            Clear All
          </button>
        </div>

        <ul>{showContacts ? renderContactList : ""}</ul>
      </div>
    </section>
  );
};
