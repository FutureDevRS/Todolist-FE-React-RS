import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {loggedIn ? (
        <nav>
          <div className="nav-container">
            <ul className="nav-menu">
              <li className="nav-item">
                {/* <Link className='nav-link' to="/">
                                Home
                            </Link> */}
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={handleLogout}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="nav-container">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
