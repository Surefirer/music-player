import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ sideBarOpen, setSideBarOpen }) => {
  const sideBarOpenHandler = () => {
    return setSideBarOpen(!sideBarOpen);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={sideBarOpenHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
