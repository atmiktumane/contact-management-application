import React from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/favouritesSlice";

export const ContactCard = (props) => {
  // console.log(props);
  const { id, name, email, time } = props.contact;
  const data = props.contact;

  const dispatch = useDispatch();

  const deleteItemHandler = (id) => {
    props.getContactId(id);
  };

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

        <div className="flex items-center gap-5">
          <button
            onClick={() => dispatch(add(data))}
            className="bg-cyan-600 hover:bg-cyan-800 px-3 py-1 rounded"
          >
            Add to Favourites
          </button>

          <button
            onClick={() => {
              window.confirm(
                `Are you sure, you want to delete this Contact : ${name}`
              ) && deleteItemHandler(id);
            }}
          >
            <TrashIcon className="w-7 h-7 text-red-700 hover:text-red-900" />
          </button>
        </div>
      </li>
    </section>
  );
};
