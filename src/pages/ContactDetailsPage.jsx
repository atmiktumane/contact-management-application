import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ContactDetailsPage = () => {
  const location = useLocation();
  const { state } = location;
  const data = state?.data;
  return (
    <section className="contact-details">
      <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
        <div className="h-96 w-96 bg-white text-center">
          <UserCircleIcon className="h-40 w-40 mx-auto mt-10" />
          <div className="text-lg font-semibold">
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>

          <Link to="/">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white mt-7">
              Back to Contact List
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
