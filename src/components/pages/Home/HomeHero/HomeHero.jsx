import React from "react";
import img from "../../../../images/bacround.png";
import inst from "../../../../images/inst.svg";
import face from "../../../../images/face.svg";
import wk from "../../../../images/Main.svg";
import mail from "../../../../images/ mail.svg";
// import input from "../../../../images/input.svg";
import click from "../../../../images/click.svg";
import { RiSearch2Line } from "react-icons/ri";
const HomeHero = () => {
  return (
    <div style={{ background: `url(${img}) no-repeat center/cover` }} id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--icon">
            <img src={inst} alt="#" />
            <img src={face} alt="#" />
            <img src={wk} alt="#" />
            <img src={mail} alt="#" />
          </div>
          <div className="hero--text">
            <h1 className="hero--text__title">
              Welcome to the amazing Kyrgyzstan!
            </h1>
            <div className="hero--text__inputs">
              <h3>
                <RiSearch2Line />
              </h3>
              <input type="text" placeholder="Where to go?" />
              <img className="hero--text__inputs--img" src={click} alt="" />
            </div>
            <p>
              Are you ready to embark on an exciting journey through the <br />{" "}
              stunning country of Central Asia? We are ready to help you plan{" "}
              <br /> the perfect trip to Kyrgyzstan.
            </p>
          </div>
        </div>
      </div>
      <div className="hero--positon">
        <div className="hero--positon__home">
          <h1>Kyrgyzstan</h1>
          <p>
            Kyrgyz Republic is a landlocked country located in the heart of{" "}
            <br />
            Central Asia. The capital is Bishkek. The mountainous region of{" "}
            <br />
            the Tian Shan covers over 80% of the country. Kyrgyzstan is <br />
            occasionally referred to as "the Switzerland of Central Asia".{" "}
            <br /> The country is divided into seven provinces, which are
            Batken, <br /> Chuy, Jalal-Abad, Issyk-Kul, Naryn, Osh and Talas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
