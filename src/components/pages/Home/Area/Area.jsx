import React from "react";
import batkenBoll from "../../../../images/batkenBoll.png"
import talasBoll from "../../../../images/talasBoll.png"
import oshBoll from "../../../../images/oshBoll.png"
import narynBoll from "../../../../images/narynBoll.png"
import kylBoll from "../../../../images/kylBoll.png"
import jalalBoll from "../../../../images/jalalBoll.png"
import chuiBoll from "../../../../images/chuiBoll.png"



const Area = () => {
  return (
    <div id="area">
        <div className="container">
            <div className="bigMap">
                  <div className="bigMap__text">
                  <div className="boll"></div>
                  <h1>Where to go</h1>
                  </div>
                  <div className="bigMap__input">
                  <div className="bigMap__input--copy">
                      <input className="bigMap__input--copy__one" type="text" maxlength="10" minlength="3" placeholder="From where?"/>
                      <input className="bigMap__input--copy__two" type="text" maxlength="10" minlength="3" placeholder="where?"/>
                      <button type="submit">Go</button>
                  </div>
                  <div className="bigMap__kg">
                        
                  <div className="bigMap__kg--talas">
                        <img src={talasBoll} alt="img"/>
                        <p>Talas</p>
                  </div>
                  <div className="bigMap__kg--chui">
                        <img src={chuiBoll} alt="img" />
                        <p>Chui</p>
                  </div>
                  <div className="bigMap__kg--coll">
                        <img src={kylBoll} alt="img" />
                        <p>Issyk-Kyl</p>
                  </div>
                  <div className="bigMap__kg--jalal">
                      <img src={jalalBoll} alt="img" />
                      <p>Jalal-Abad</p>
                  </div>
                  <div className="bigMap__kg--osh">
                      <img src={oshBoll} alt="img" />
                      <p>Osh</p>
                  </div>
                  <div className="bigMap__kg--batken">
                    <img src={batkenBoll} alt="img" />
                    <p>Batken</p>
                  </div>
                  <div className="bigMap__kg--naryn">
                    <img src={narynBoll} alt="img" />
                    <p>Naryn</p>
                  </div>

                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Area;