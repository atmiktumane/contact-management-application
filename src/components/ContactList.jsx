import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  // console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <>
      <div className="min-h-screen bg-stone-400 flex items-center justify-center">
        <div className="bg-white shadow-md m-6 rounded p-6  max-w-md w-full">
          <div className="flex justify-between mb-6 ">
            <h3 className="text-xl font-semibold mt-1">Contact List</h3>
            <Link to="/add-contact">
              <button className="bg-emerald-400 hover:bg-emerald-600 px-3 py-1 rounded-md ">
                Add Contact
              </button>
            </Link>
          </div>

          <ul>{renderContactList}</ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
