import { React, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../MainPage/MainPage";
import MenuMobile from "../MainPage/Header/MenuMobile";
import "./UI.scss";

const UI = () => {
  // const [clicked, setClicked] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   setClicked((current) => !current);
  // };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("click");
    setHamburgerClicked((current) => !current);
  };

  return (
    <div className="relative">
      {/* {clicked ? null : <LandingPage clickHandle={clickHandler} />}
      {clicked ? <MainPage /> : null} */}
      <MainPage clickHandler={clickHandler} />
      {hamburgerClicked && <MenuMobile />}
    </div>
  );
};

export default UI;
