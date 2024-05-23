import React from "react";
import ContactCard from "./ContactCard";

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
      <div className="min-h-64 bg-stone-400 flex items-center justify-center">
        <div className="bg-white shadow-md m-6 rounded p-6  max-w-md w-full">
          <h3 className="text-xl font-semibold mb-4">Contact List</h3>
          <ul>{renderContactList}</ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
