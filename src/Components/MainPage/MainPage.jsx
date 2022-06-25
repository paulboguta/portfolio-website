import {React} from "react";
import Header from "./Header/Header";
import LeftIcons from "./LeftIcons/LeftIcons";
import RightEmail from "./RightEmail/RightEmail";
import Sections from "./Sections/Sections";
import "./MainPage.scss";

const MainPage = () => {
 
  


  return (
    <div className="main-page__wrapper">
      <div className="header__wrapper">
        <Header />
      </div>
      <LeftIcons />
      <RightEmail />
      <div className="sections__wrapper">
        <Sections />
      </div>
    </div>
  );
};

export default MainPage;
