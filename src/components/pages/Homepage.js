import React from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../UserService";

function Homepage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/Webcomponent");
  };


  const loggOut = () => {
        UserService.userLogout();
  }

  return (
    <div className="mainContainer">
      <button className="homeButton" onClick={onClick}>Click Here</button>
      <button className="homeButton" onClick={loggOut}>Logg Out</button>
    </div>
  );
}
export default Homepage;
