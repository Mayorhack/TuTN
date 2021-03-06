import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="navbar" data-visible="false">
        <Link to="/">
          <div className="logo flex-column">
            <img src="\images\Group 21.png" alt="" />
            <h3 className="heading-logo">THE CONNECTED AWARDS</h3>
          </div>
        </Link>

        <ul className="nav flex">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/past">Past Editions</Link>
          </li>
          <li>
            <Link to="/future">Future editions</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/donations">Make a Donation</Link>
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
