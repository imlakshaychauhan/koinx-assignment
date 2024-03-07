import React from "react";
import "./styles/tokenomics.css";
import bar from "../assets/bar.png";

const Tokenomics = () => {
  return (
    <div className="token-div">
      <h1>Tokenomics</h1>
      <h3>Initial Distribution</h3>
      <div className="token-main-div">
        <div>
          <img src={bar} />
        </div>
        <div className="investor">
          <div className="single-investor">
          <div className="f-token-bar"></div>
          <p>Crowdsale investors: 80%</p>
          </div>
          <div className="single-investor">
          <div className="s-token-bar"></div>
          <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quia.
        Reiciendis vel, omnis saepe dolor culpa iusto quisquam consequatur
        maxime expedita ex eveniet ipsum facere distinctio molestiae fuga
        deleniti quia voluptates. Ad minus repudiandae sit sunt porro nam eos,
        consequuntur debitis sed necessitatibus facere, fugiat quae quasi
        impedit, hic unde.
      </p>
    </div>
  );
};

export default Tokenomics;
