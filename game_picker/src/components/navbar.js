import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationButton from "./authentication-button";

const Navbar = () => {
  const { user } = useAuth0()


  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Game Picker</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/games" tabIndex="-1">Games</NavLink>
          </li>
        </ul>
        <span className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user ? user.picture : "http://cdn.onlinewebfonts.com/svg/img_331336.png"} width="30px" alt=""/>
          </a>
          <div className="dropdown-menu dropdown-menu-md-right" aria-labelledby="dropdown01">
            {user ? <NavLink className="dropdown-item" to="/profile">Profile</NavLink> : <></>}
            <a className="dropdown-item" href="#">Something else here</a>
            <AuthenticationButton />
          </div>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;
