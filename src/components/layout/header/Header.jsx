import React from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dark = useSelector((s) => s.dark);
  const dispatch = useDispatch();

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/weather">Weather</NavLink>

          
            <button
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              className="theme-toggle"
            >
              {dark ? <MdOutlineLightMode /> : <LuSunMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
