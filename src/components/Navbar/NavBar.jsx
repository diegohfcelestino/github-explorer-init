import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./nav-bar.scss";
import { IconLogout } from "../../services/icons";
import { searchProfile } from "../../services/api";

export const NavBar = () => {
  const [collapse, setCollapse] = useState(false);
  const user = localStorage.getItem("user");
  const [profile, setProfile] = useState(null);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    searchProfile().then(response => {
      setProfile(response);
    });
  }, []);

  return (
    <nav
      className="navbar fixed-top navbar-light"
      style={{ backgroundColor: "#3d2574" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler navbar-toggler-right dropdown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleCollapse()}
        >
          <div className={collapse ? "hamburguer open" : "hamburguer"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="dataUser">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${user}`}
          >
            <p>{profile?.user_name}</p>
          </a>
          <img
            className="navbar-brand"
            src={profile?.avatar_url}
            alt={profile?.user_name}
          />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <>
              <li className="nav-item">
                <Link
                  className={collapse ? "nav-link text" : "nav-link"}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={collapse ? "nav-link text" : "nav-link"}
                  to="/search-users"
                >
                  Pesquisar
                </Link>
              </li>
            </>
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={collapse ? "nav-link text" : "nav-link"}
                onClick={() => console.log("sair")}
                to="/"
              >
                <IconLogout /> Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
