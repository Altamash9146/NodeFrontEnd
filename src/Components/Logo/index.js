import React from "react";
import "./Logo.style.css";
import { Link } from "react-router-dom";
import useAuth from "./useAuth";

const Logo = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <>
    <div className="border">
      <h1 className="Heading">
          <span className="Vertical-Text">The</span>Siren
        </h1>
        <div>
          {isLoggedIn ? (
            <button className="Logo-Logout-Button" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link to={"/Login"}>
                <button className="Logo-Login-Button">Login</button>
              </Link>
              <Link to={"/Signup"}>
                <button className="Logo-Signup-Button" onClick={login}>
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
