import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components";

export const ContactListPage = (props) => {
  // console.log(props);

  const [show, setShow] = useState(true);

  const getContactId = (id) => {
    props.deleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        getContactId={getContactId}
      />
    );
  });

  const clearAllContacts = (a) => {
    props.clearAllContactsHandler();
  };

  return (
    <section className="contact-list">
      <div className="min-h-screen bg-cyan-900 flex items-center justify-center">
        <div className="bg-gray-900 shadow-md m-6 rounded p-6  max-w-xl w-full">
          <div className="flex justify-between mb-6">
            <h3 className="text-xl font-semibold mt-1 text-white">
              Contact List
            </h3>

            <Link
              to="/add-contact"
              className="bg-emerald-600 hover:bg-emerald-800 px-3 py-1 rounded-md text-gray-200"
            >
              Add Contact
            </Link>

            <button
              onClick={() => setShow(!show)}
              className="bg-cyan-600 hover:bg-cyan-800 px-3 py-1 rounded-md text-gray-200"
            >
              {show ? "hide contacts" : "show contacts"}
            </button>

            <button
              onClick={() => {
                return (
                  window.confirm(
                    "Are you sure, you want to Delete All Contacts ?"
                  ) && clearAllContacts(1)
                );
              }}
              className="bg-red-600 hover:bg-red-800 px-3 py-1 rounded-full text-white"
            >
              Clear All
            </button>

            <p className="bg-zinc-500 mt-1 w-7 h-7 text-white rounded-full flex items-center justify-center">
              {props.contacts.length}
            </p>
          </div>

          {/* <ul>{show && renderContactList}</ul> */}
          <ul>{show ? renderContactList : ""}</ul>
        </div>
      </div>
    </section>
  );
};