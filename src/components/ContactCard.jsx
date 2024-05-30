import React from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
  // console.log(props);
  const { id, name, email, time } = props.contact;
  const data = props.contact;

  return (
    <section className="contact-card">
      <li className="mb-4 p-4 flex items-center justify-between bg-gray-200 shadow hover:shadow-cyan-500/40 hover:shadow-xl ">
        <div className="flex">
          <UserCircleIcon className="h-8 w-8 mr-4 my-auto" />
          <Link to={`/contact/${id}`} state={{ data }}>
            <p className="text-lg">{name}</p>
            <p>{email}</p>
            <p className="text-xs text-grey-300 mt-2">{time}</p>
          </Link>
        </div>

        <Link>
          <TrashIcon className="h-7 w-7 text-red-700 hover:text-red-900" />
        </Link>
      </li>
    </section>
  );
};
