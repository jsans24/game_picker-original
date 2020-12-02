import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationButton from "./authentication-button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Game Picker</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search"/>
        </form>
        <span className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="http://cdn.onlinewebfonts.com/svg/img_331336.png" width="15px" alt=""/></a>
          <div className="dropdown-menu dropdown-menu-md-right" aria-labelledby="dropdown01">
            <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
            <a className="dropdown-item" href="#">Something else here</a>
            <AuthenticationButton />
          </div>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;