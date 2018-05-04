import React from "react";
const Header = props => {
  return (
    <div>
      <h1 className="header">{props.title}</h1>
      <p>
        <b>{props.subtitle}</b>
      </p>
    </div>
  );
};

export default Header;
