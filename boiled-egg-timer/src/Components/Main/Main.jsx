import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';
import titleImage from "./images/title-png-egg.png"

const Main = () => {
  return (
    <>
      <h1 className="main-title">
        Добро пожаловать <br /> в приложение <span className="gradient-egg">EggTimer</span>
      </h1>
      <img src={titleImage} alt='egg-icon' className='title-img'/>

      <NavLink to="/timer">Go</NavLink>
    </>
  );
};

export default Main;
