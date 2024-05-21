import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

function ContactList(props) {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <li
        key={contact.id}
        className="mb-4 p-4 flex items-center justify-between bg-zinc-200"
      >
        <div>
          <p className="text-lg">{contact.name}</p>
          <p className="text-gray-600">{contact.email}</p>
        </div>

        <button className="text-red-600 hover:text-red-800">
          <TrashIcon className="h-6 w-6" />
        </button>
      </li>
    );
  });
  console.log(props);
  return (
    <>
      {/* <div className="w-full bg-lime-400">
        <h2>Contact List</h2>
        <div>{renderContactList}</div>
      </div> */}

      <div className="min-h-64 bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-6  max-w-md w-full">
          <h3 className="text-xl font-bold mb-4">Contact List</h3>
          <ul>
            <div>{renderContactList}</div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
