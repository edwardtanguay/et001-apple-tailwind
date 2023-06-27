import Router from "./components/Router";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { AppContext } from "./components/Context";

const App = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <AppContext.Provider
        value={{
          filter,
          setFilter, 
        }}
      >
        <Navbar />
        <Router />
      </AppContext.Provider>
    </div>
  );
};

export default App;
