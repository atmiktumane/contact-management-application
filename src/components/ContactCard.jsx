import React from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";

function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <>
      <li className="mb-4 p-4 flex items-center justify-between bg-zinc-200 ">
        <div className="flex">
          <UserCircleIcon className="h-7 w-7 mr-4 mt-3" />
          <div className="">
            <p className="text-lg">{name}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        <button className="text-red-500 hover:text-red-800">
          <TrashIcon className="h-7 w-7 " />
        </button>
      </li>
    </>
  );
}

export default ContactCard;
