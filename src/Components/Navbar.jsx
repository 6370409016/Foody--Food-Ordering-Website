import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Foody
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {localStorage.getItem("authToken") ? (
              <div style={{ display: "flex", marginRight: "5%", width: "10%" }}>
                <div className="btn bg-white text-success mx-2 " to="/">
                  Cart
                </div>
                <div
                  className="btn bg-white text-danger mx-2 "
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", marginRight: "5%", width: "20%" }}>
                <Link className="btn bg-white text-success mx-2 " to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-2"
                  to="/creatuser"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
