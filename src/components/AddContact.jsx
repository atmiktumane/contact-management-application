import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory to fill");
      return;
    }

    const newContact = {
      id: uuidv4(), // generate unique id for each contact
      name,
      email,
    };

    props.addContactHandler(newContact);

    setName("");
    setEmail("");

    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen  bg-gray-600 p-14">
        {/* Add Contact Heading */}
        <div className="h-16 flex items-center justify-center text-white">
          <h2 className="text-xl font-semibold">Add Contact</h2>
        </div>

        <div className="max-w-sm mx-auto bg-zinc-700 px-20 py-8  rounded-lg">
          <form onSubmit={addData}>
            {/* Label Input for Name */}
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-md"
              />
            </div>

            {/* Label Input for Email */}
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-md"
              />
            </div>

            {/* Submit Button */}

            <button
              className="bg-teal-400 text-zinc-800 hover:text-zinc-300 hover:bg-teal-800 active:bg-red-300 font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;
