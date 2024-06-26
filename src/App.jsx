import React from "react";
import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Header />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
