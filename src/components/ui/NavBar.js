import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
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
        <Link to='/login' className="btn btn-outline-primary">Logout</Link>
      </div>
    </div>
  </div>
</nav>
  )
}
