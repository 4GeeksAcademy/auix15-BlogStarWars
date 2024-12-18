import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const favsCount = store.favorites.length;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000000" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Distant+Galaxy&display=swap"
        rel="stylesheet"
      />
      <div
        className="container d-flex justify-content-center"
        style={{ height: "15vh" }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            alt="Star Wars Logo"
            style={{ height: "100px" }}
          />
        </div>
      </div>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item me-3 me-lg-0 dropdown">
          <button
            className="btn btn-warning text-black"
            type="button"
            onClick={toggleDropdown}
            style={{ marginRight: "50px" }}
          >
            Favorites: {favsCount}
          </button>

          {isDropdownOpen && (
            <div
              className="dropdown-menu show text-black"
              style={{
                position: "absolute",
                right: "0",
                backgroundColor: "#fff",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
                {store.favorites.length > 0 ? (
                  store.favorites.map((favorite, index) => (
                    <li
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                      style={{ padding: "5px 0" }}
                    >
                      <span>{favorite}</span>
                      <RiDeleteBin6Fill
                        className="deleteIcon"
                        onClick={() => actions.deleteFavorite(index)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </li>
                  ))
                ) : (
                  <li className="text-muted">No favorites added</li>
                )}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
