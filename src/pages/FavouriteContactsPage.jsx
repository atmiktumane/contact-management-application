import React from "react";
import { FavouritesCard } from "../components";
import { useSelector } from "react-redux";

export const FavouriteContactsPage = () => {
  //   const contacts = [
  //     { id: "1", name: "ranjan", email: "ranjan@test.com" },
  //     { id: "2", name: "gaurav", email: "gaurav@test.com" },
  //   ];

  const contacts = useSelector((state) => state.favouritesState.favouriteList);

  const renderFavouriteList = contacts.map((contact) => {
    return <FavouritesCard key={contact.id} contact={contact} />;
  });

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div>
        <h3 className="text-center text-2xl mb-4 font-semibold">
          Favourites List : {contacts.length}
        </h3>
        <ul>{renderFavouriteList}</ul>
      </div>
    </section>
  );
};
