import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [language, setLanguage] = useState(false);
  const [allLang, setAllLang] = useState(1);
  const [regions, setRegions] = useState(false);
  const [burger, setBurger] = useState(false);

  let str = "Eng";
  if (allLang === 1) {
    str = "Eng";
  } else if (allLang === 2) {
    str = "Rus";
  } else if (allLang === 3) {
    str = "Ara";
  } else if (allLang === 4) {
    str = "Chi";
  }

  let str1 = "Russian";
  let str2 = "Arabic";

  if (allLang === 2) {
    str1 = "English";
  } else {
    str1 = "Russian";
  }
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <p className="header__p">logo</p>
            <nav>
              <NavLink to="/">
                <li onClick={() => setRegions(false)}>Home</li>
              </NavLink>
              <NavLink to="/regions">
                <div className="header__regions">
                  <li onClick={() => setRegions(!regions)}>Regions</li>
                  <div
                    className="header__regions__acard"
                    style={{ height: regions ? "" : "0", transition: ".3s" }}
                  >
                    <NavLink to="/regions/chui">
                      <p
                        onClick={() => setRegions(false)}
                        className="header__regions__acard__firstP"
                        style={{ display: regions ? "" : "none" }}
                      >
                        Chui
                      </p>
                    </NavLink>
                    <NavLink to="/regions/talas">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Talas
                      </p>
                    </NavLink>
                    <NavLink to="/regions/issykKul">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Issyk-Kul
                      </p>
                    </NavLink>
                    <NavLink to="/regions/naryn">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Naryn
                      </p>
                    </NavLink>
                    <NavLink to="/regions/jalalAbad">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Jalal-Abad
                      </p>
                    </NavLink>
                    <NavLink to="/regions/osh">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Osh
                      </p>
                    </NavLink>
                    <NavLink to="/regions/batken">
                      <p
                        onClick={() => setRegions(false)}
                        style={{ display: regions ? "" : "none" }}
                      >
                        Batken
                      </p>
                    </NavLink>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/culture">
                <li onClick={() => setRegions(false)}>Culture</li>
              </NavLink>
              <NavLink to="gallery">
                <li onClick={() => setRegions(false)}>Gallery</li>
              </NavLink>
              <NavLink to="routes">
                <li onClick={() => setRegions(false)}>Routes</li>
              </NavLink>
            </nav>
            <div className="header__btns">
              <div
                className="header__btns__language"
                onClick={() => setLanguage(!language)}
                style={{ borderTop: language ? "none" : "" }}
              >
                <p style={{ display: language ? "none" : "" }}>{str} </p>
                <svg
                  style={{ display: language ? "none" : "" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9997 13.1724L16.9495 8.22266L18.3637 9.63687L11.9997 16.0009L5.63574 9.63687L7.04996 8.22266L11.9997 13.1724Z"
                    fill="#004A60"
                  />
                </svg>
                <ul
                  style={{
                    height: language ? "" : "0",
                    transition: ".5s",
                    border: language ? "" : "none",
                  }}
                >
                  <li style={{ display: language ? "" : "none " }}>
                    {str}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.364 10.8276L17.3138 15.7773L18.728 14.3631L12.364 7.99912L6 14.3631L7.41422 15.7773L12.364 10.8276Z"
                        fill="#242424"
                      />
                    </svg>
                  </li>
                  <li
                    onClick={() => setAllLang(str1 === "Russian" ? 2 : 1)}
                    style={{ display: language ? "" : "none" }}
                  >
                    {str1}
                  </li>
                  <li
                    onClick={() => setAllLang(3)}
                    style={{ display: language ? "" : "none" }}
                  >
                    {str2}
                  </li>
                  <li
                    onClick={() => setAllLang(4)}
                    style={{ display: language ? "" : "none" }}
                  >
                    Chinese
                  </li>
                </ul>
              </div>
              <button>Sign up</button>
              <div
                onClick={() => setBurger(!burger)}
                className="header__btns__burger"
              >
                <span
                  style={{
                    transform: burger ? "rotate(45deg)" : "",
                    top: burger ? "7px" : "",
                    transition: ".3s",
                  }}
                ></span>
                <span
                  style={{
                    transform: burger
                      ? "scale(0)"
                      : "scale(1) translateY(-50%)",
                    transition: ".3s",
                  }}
                ></span>
                <span
                  style={{
                    transform: burger ? "rotate(-45deg)" : "",
                    top: burger ? "7px" : "",
                    transition: ".3s",
                  }}
                ></span>
              </div>
              <div
                style={{ height: burger ? "" : "0", transition: ".3s" }}
                className="header__btns__menu"
              >
                <NavLink to="/">
                  <li style={{ display: burger ? "flex" : "none" }}>Home</li>
                </NavLink>
                <NavLink to="/regions">
                  <div className="header__regions">
                    <li
                      style={{ display: burger ? "flex" : "none" }}
                      onClick={() => setRegions(!regions)}
                    >
                      Regions
                    </li>
                    {/* <div
                      className="header__regions__acard"
                      style={{
                        height: regions ? "" : "0",
                        transition: ".3s",
                      }}
                    >
                      <NavLink to="/regions/chui">
                        <p
                          className="header__regions__acard__firstP"
                          style={{ display: regions ? "" : "none" }}
                        >
                          Chui
                        </p>
                      </NavLink>
                      <NavLink to="/regions/talas">
                        <p style={{ display: regions ? "" : "none" }}>Talas</p>
                      </NavLink>
                      <NavLink to="/regions/issykKul">
                        <p style={{ display: regions ? "" : "none" }}>
                          Issyk-Kul
                        </p>
                      </NavLink>
                      <NavLink to="/regions/naryn">
                        <p style={{ display: regions ? "" : "none" }}>Naryn</p>
                      </NavLink>
                      <NavLink to="/regions/jalalAbad">
                        <p style={{ display: regions ? "" : "none" }}>
                          Jalal-Abad
                        </p>
                      </NavLink>
                      <NavLink to="/regions/osh">
                        <p style={{ display: regions ? "" : "none" }}>Osh</p>
                      </NavLink>
                      <NavLink to="/regions/batken">
                        <p style={{ display: regions ? "" : "none" }}>Batken</p>
                      </NavLink>
                    </div> */}
                  </div>
                </NavLink>
                <NavLink to="/culture">
                  <li style={{ display: burger ? "flex" : "none" }}>Culture</li>
                </NavLink>
                <NavLink to="gallery">
                  <li style={{ display: burger ? "flex" : "none" }}>Gallery</li>
                </NavLink>
                <NavLink to="routes">
                  <li style={{ display: burger ? "flex" : "none" }}>Routes</li>
                </NavLink>
                <a style={{ display: burger ? "flex" : "none" }}>Language</a>
              </div>
            </div>
          </div>
        </div>
        <div className="headerBg"></div>
      </header>
      <div
        onClick={() => {
          setRegions(false);
          setLanguage(false);
          setBurger(false);
        }}
        className="bg"
      ></div>
    </>
  );
};

export default Header;
