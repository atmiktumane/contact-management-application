import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DeleteContact(props) {
  const location = useLocation();
  const { state } = location;
  const data = state?.data;
  const navigate = useNavigate();
  const deleteContact = () => {
    props.getContactId(data.id);

    navigate("/");
  };
  return (
    <>
      <div className="h-screen w-full bg-zinc-400 flex items-center justify-center">
        <div className="h-96 w-96 bg-white text-center p-4">
          <UserCircleIcon className="h-44 w-44 mx-auto" />
          <p>{data.name}</p>
          <p>{data.email}</p>

          <p className="text-red-700 font-semibold mt-7">
            Are You Sure, you want to delete this Contact ?
          </p>

          <div className="grid grid-cols-2 gap-5 text-white">
            <button
              className="bg-red-600 hover:bg-red-900 px-3 py-1 rounded-lg "
              onClick={deleteContact}
            >
              Yes
            </button>

            <Link
              to="/"
              className="bg-cyan-600 hover:bg-cyan-900 px-3 py-1 rounded-lg"
            >
              <button>No</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteContact;
