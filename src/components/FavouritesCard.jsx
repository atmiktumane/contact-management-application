import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { remove } from "../store/favouritesSlice";
import { useDispatch } from "react-redux";

export const FavouritesCard = ({ contact }) => {
  const { id, name, email } = contact;
  const dispatch = useDispatch();
  return (
    <li className="min-h-24 min-w-96 border shadow-lg shadow-indigo-500/50 flex items-center justify-between p-4 my-4">
      <div className="flex items-center">
        <UserCircleIcon className="h-9 w-9 mr-3" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(remove(contact))}
        className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded md:ml-40"
      >
        Remove From Favourites
      </button>
    </li>
  );
};
