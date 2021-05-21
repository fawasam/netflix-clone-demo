import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_btn">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laborum
          cupiditate, iste vitae optio fuga praesentium dignissimos perspiciatis
          ullam modi, consectetur recusandae atque ratione quos obcaecati
          consequuntur veniam dolore quas.
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
