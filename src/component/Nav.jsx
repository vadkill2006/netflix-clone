import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Nav = () => {
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    console.log("logout");
    navigate("/");
  };
  return (
    <div className="nav false">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
      />
      {/* <img
            className="nav__avatar"
            src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
            alt=""
            /> */}
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default Nav;
