import React from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function ContactCard(props) {
  // console.log(props);
  const { id, name, email } = props.contact;
  const data = props.contact;

  return (
    <>
      <li className="mb-4 p-4 flex items-center justify-between bg-slate-400 ">
        <div className="flex">
          <UserCircleIcon className="h-7 w-7 mr-4 mt-3" />
          <Link to={`/contact/${id}`} state={{ data }}>
            <p className="text-lg">{name}</p>
            <p>{email}</p>
          </Link>
        </div>

        <Link to={`/contact/${id}/delete`} state={{ data }}>
          <TrashIcon className="h-7 w-7 text-red-700 hover:text-red-900" />
        </Link>
        {/* <button onClick={() => props.clickHandler(id)}>
          <TrashIcon className="h-7 w-7 text-red-700 hover:text-red-900" />
        </button> */}
      </li>
    </>
  );
}

export default ContactCard;
