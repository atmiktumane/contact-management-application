import React, { useState, useEffect } from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/favouritesSlice";

export const ContactCard = (props) => {
  // console.log(props);
  const { id, name, email, time } = props.contact;
  const [contactInFavourites, setContactInFavourites] = useState(false);
  const data = props.contact;

  const dispatch = useDispatch();

  const getFavouriteList = useSelector(
    (state) => state.favouritesState.favouriteList
  );

  const deleteItemHandler = (id) => {
    props.getContactId(id);
  };

  useEffect(() => {
    const itemInFavourites = getFavouriteList.find((item) => item.id === id);

    if (itemInFavourites) {
      setContactInFavourites(true);
    } else {
      setContactInFavourites(false);
    }
  }, [getFavouriteList, id]);

  return (
    // <li className="mb-4 p-4 flex items-center justify-between bg-gray-200 shadow hover:shadow-cyan-500/40 hover:shadow-xl ">
    //   <div className="flex">
    //     <UserCircleIcon className="h-8 w-8 mr-4 my-auto" />
    //     <Link to={`/contact/${id}`} state={{ data }}>
    //       <p className="text-lg">{name}</p>
    //       <p>{email}</p>
    //       {/* <p className="text-xs text-grey-300 mt-2">{time}</p> */}
    //     </Link>
    //   </div>

    //   <div className="flex items-center">
    //     {/* <button
    //         onClick={() => dispatch(add(data))}
    //         className="bg-cyan-600 hover:bg-cyan-800 px-3 py-1 rounded"
    //       >
    //         Add to Favourites
    //       </button> */}

    //     {contactInFavourites ? (
    //       <button
    //         onClick={() => dispatch(remove(data))}
    //         className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded mr-40"
    //       >
    //         Remove from Favourites
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => dispatch(add(data))}
    //         className="bg-cyan-600 hover:bg-cyan-800 px-3 py-1 rounded mr-40"
    //       >
    //         Add To Favourites
    //       </button>
    //     )}

    //     <button
    //       onClick={() => {
    //         window.confirm(
    //           `Are you sure, you want to delete this Contact : ${name}`
    //         ) && deleteItemHandler(id);
    //       }}
    //     >
    //       <TrashIcon className="w-7 h-7 text-red-700 hover:text-red-900" />
    //     </button>
    //   </div>
    // </li>

    <li className="bg-white p-3 my-5 flex justify-between shadow-lg shadow-cyan-500/50">
      <Link
        to={`/contact/${id}`}
        state={{ data }}
        className="flex items-center"
      >
        <UserCircleIcon className="h-8 w-8 mr-3" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </Link>

      <div className="flex items-center">
        {contactInFavourites ? (
          <button
            onClick={() => dispatch(remove(data))}
            className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded mr-40"
          >
            Remove from Favourites
          </button>
        ) : (
          <button
            onClick={() => dispatch(add(data))}
            className="bg-cyan-600 hover:bg-cyan-800 px-3 py-1 rounded mr-40"
          >
            Add To Favourites
          </button>
        )}

        <button
          onClick={() => {
            window.confirm(
              `Are you sure, you want to delete this Contact : ${name}`
            ) && deleteItemHandler(id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          <TrashIcon className="w-7 h-7" />
        </button>
      </div>
    </li>
  );
};
