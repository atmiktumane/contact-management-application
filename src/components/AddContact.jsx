import React from "react";

function AddContact() {
  return (
    <>
      <div className="w-full h-96 bg-zinc-500">
        {/* Add Contact Heading */}
        <div className="h-16 flex items-center justify-center text-white">
          <h2 className="text-lg">Add Contact</h2>
        </div>

        <div className="max-w-sm mx-auto bg-white p-8 rounded-lg">
          <form>
            {/* Label Input for Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input type="text" name="name" placeholder="Enter the Name" />
            </div>

            {/* Label Input for Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input type="text" name="email" placeholder="Enter Email" />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;
