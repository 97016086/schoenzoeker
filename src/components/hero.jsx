import React from "react";
import shoeImage from "../images/jaclyn-moy-ugZxwLQuZec-unsplash.jpg";

const hero = () => {
  return (
    <section className="">
      <div>
        <h1 className="text-[#91ca6b]">Vind Jouw Passende schoen.</h1>
        <button className="info-button">Meer Informatie</button>
      </div>
      <div>
        <img
          src={shoeImage}
          alt="een afbeelding met verschillende soort schoenen erop."
        />
      </div>
    </section>
  );
};

export default hero;
