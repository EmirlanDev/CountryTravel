import React from "react";
import bishkek from "./.././../././../../images/bishkekB.png";

const Bishkek = () => {
  return (
    <div id="bishkek">
      <div className="container">
        <h2>Bishkek</h2>
        <div className="bishkek">
          <div className="bishkek__img">
            <img src={bishkek} alt="bishkek" />
          </div>
          <div className="bishkek__text">
            <h1>Bishkek</h1>
            <p>
              This is the capital of a picturesque mountainous country -
              Kyrgyzstan, from where tourists make trips to the world-famous,
              crystal-clear Issyk-Kul and other natural attractions of the Tien
              Shan. Framed by mountains, the city is rich in beautiful views,
              monumental monuments, parks and museum antiquities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bishkek;
