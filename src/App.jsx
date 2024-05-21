import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Rahul",
      email: "rahul@gmail.com",
    },
    {
      id: "2",
      name: "Akshay",
      email: "akshay@test.com",
    },
  ];

  return (
    <>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
