import React from "react";
import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar.js";
import Banner from "./Componenets/Banner/Banner.js";
import RowPost from "./Componenets/RowPost/RowPost";

import {originals,action,comedy,horror,romance,documentary} from "./urls"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title="Netflix Orginals" url={originals} />
      <RowPost title="Action Movies" url={action} isSmall/>
      <RowPost title="Comedy Movies" url={comedy} isSmall/>
      <RowPost title="Horror Movies" url={horror} isSmall/>
      <RowPost title="Romance Movies" url={romance} isSmall/>
      <RowPost title="Documentory Movies" url={documentary} isSmall/>
    </div>
  );
}

export default App;
