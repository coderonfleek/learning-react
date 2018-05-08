import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>My App</h1>

    <p>
      {/* Set css class to style the active page link using 'activeClassName', use 'exact' to get an actual match */}
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      |
      <NavLink to="/settings" activeClassName="is-active">
        Settings
      </NavLink>
      |
      <NavLink
        to="/querypage?message=My%20Query%20String"
        activeClassName="is-active"
      >
        Query Page
      </NavLink>
      |
      <NavLink to="/match/Fikiout" activeClassName="is-active">
        Match Page
      </NavLink>
    </p>
  </div>
);
//
export default Header;
