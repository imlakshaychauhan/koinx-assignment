import React from "react";
import "./styles/about.css";
import fcard from "../assets/f-card.png";
import scard from "../assets/s-card.png";

const About = () => {
  return (
    <div className="about-div">
      <h1>About Bitcoin</h1>
      <div className="paragraph">
        <p className="question">What is Bitcoin?</p>
        <p className="answer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          labore quia reprehenderit iure aperiam! Commodi sed cum corrupti!
          Inventore placeat consectetur non ex nostrum tenetur unde, corrupti at
          minima vel explicabo soluta velit consequuntur? Possimus rem modi
          odio! In repellat reiciendis, ipsa iure eligendi, architecto vel
          facilis natus tempora, nulla autem expedita.
        </p>
      </div>
      <div className="para-line"></div>
      <div className="paragraph">
        <p className="question">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam
          magnam sed fuga dolor, facilis perferendis esse cupiditate saepe
          molestias qui, nostrum eos nobis? Voluptates beatae nisi illum facilis
          officiis harum adipisci reprehenderit? Aliquid at hic voluptate.
          Soluta, mollitia unde?
        </p>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          in dolore ipsum libero repellat, quaerat necessitatibus eaque, nulla
          illo nesciunt porro sit adipisci perspiciatis officia hic iste
          commodi? Alias quo eum unde est officia nulla ut beatae nobis
          temporibus nisi perferendis quas esse eos libero, excepturi
          necessitatibus similique error quasi!
        </p>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          beatae quod suscipit provident fuga ipsa error natus repellat
          consectetur exercitationem ducimus optio. Molestiae enim inventore
          praesentium harum, provident in quasi!
        </p>
      </div>
      <div className="para-line"></div>
      <div className="already-div">
        <h1>About Bitcoin</h1>
        <div className="img-divs">
          <img src={fcard} />
          <img src={scard} />
        </div>
        <div className="para-line"></div>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          beatae quod suscipit provident fuga ipsa error natus repellat
          consectetur exercitationem ducimus optio. Molestiae enim inventore
          praesentium harum, provident in quasi!
        </p>
      </div>
    </div>
  );
};

export default About;
