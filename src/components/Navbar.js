import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="navbar" data-visible="false">
        <div className="logo flex-column">
          <img src="\images\Group 21.png" alt="" />
          <h3 className="heading-logo">THE CONNECTED AWARDS</h3>
        </div>

        <ul className="nav flex">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <a href="">Past Editions</a>
          </li>
          <li>
            <a href="">Future editions</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="">Make a Donation</a>
          </li>
        </ul>
        <ul className="account flex">
          <li>
            {!currentUser ? (
              <Link to="/login" className="login">
                Log In
              </Link>
            ) : (
              <div className="flexy">
                <img src="images/Vector.png" alt="" />
                <p className="amount">70</p>
              </div>
            )}
          </li>
          <li>
            {!currentUser ? (
              <Link to="/register" className="create-account">
                Create Account
              </Link>
            ) : (
              <div className="flexy user">
                <img src="images/Vector (1).png" alt="" />
                <select>
                  <option value={currentUser}>{currentUser}</option>
                  <option value="">Log out</option>
                </select>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="menu" onClick={handleClick}>
        {openMenu ? <BiMenu /> : <FaTimes />}
      </div>
      <div className="logo mobilelogo flex-column">
        <img src="\images\Group 21.png" alt="" />
        <h3 className="heading-logo">THE CONNECTED AWARDS</h3>
      </div>
    </>
  );
};

export default Navbar;
