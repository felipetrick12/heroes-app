import React, { useContext } from "react";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export default function NavBar() {

   const {user:{name},dispatch} =useContext(AuthContext);
    const history = useHistory();


   const handleLogout =() => {
    history.replace('/login')
    dispatch({
      type: types.logout });
   }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink to='/' className="navbar-brand">Asociaciones</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/marvel' className="nav-link">Marvel</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/dc' className="nav-link">Dc</NavLink>
        </li>
      </ul>
      <div className="d-flex">
      <span className="nav-link">{name}</span>
      <Link to='/search' className="btn btn-outline-success mx-2">Search</Link>
        <button  className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </div>

</nav>
  )
}
