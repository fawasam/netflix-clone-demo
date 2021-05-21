import React from "react";
import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar.js";
import Banner from "./Componenets/Banner/Banner.js";
import RowPost from "./Componenets/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost />
    </div>
  );
}

export default App;
