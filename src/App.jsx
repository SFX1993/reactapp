import React, { useState } from "react";
import Search from "./components/search";
const App = () => {
  const [searchTerm, setSearchTerm] = useState(initialState, "");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img
              src="./hero.png
            "
              alt="Hero Banner"
            />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>
          <Search />
        </div>
      </div>
    </main>
  );
};
export default App;
