import React from "react";

import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand fs-2" to="/Home">
            Motorbike
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/Home"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Home
                </NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Service"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/OrderReview"
                  className="nav-link"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Order Review
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {user.email && (
                <>
                  <NavLink
                    to="/Dashboard"
                    className="nav-link"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Dashboard
                  </NavLink>

                  <span>{user.displayName}</span>
                  <button className="btn btn-info ms-2" onClick={logOut}>
                    Logout
                  </button>
                </>
              )}
              {!user.email && (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
