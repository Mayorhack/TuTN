import { useState } from "react";
import ButtonAlt from "./ButtonAlt";
import { Link } from "react-router-dom";

const Register = ({ onclick }) => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });
  const addInfo = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };
  const handleClick = function (e) {
    // e.preventDefault();
    onclick(userInfo);
    setUserInfo({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
    });
  };

  return (
    <div className="accounts">
      <div className="register">
        <h4>Time to vote your favourite Techie, let's make this amazing!</h4>
        <h6>Create an Account</h6>
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
        <ButtonAlt
          text={" Create my account "}
          style={{
            backgrouundColor: "rgba(216, 205, 224, 0.1)",
            border: "1px solid #D8CDE0",
          }}
        />

        <p className="or">Or</p>
        <form>
          <div className="name flex ">
            <div className="firstname flex-column ">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={addInfo}
                value={userInfo.firstname}
              />
            </div>
            <div className="lastname flex-column">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={addInfo}
                value={userInfo.lastname}
              />
            </div>
          </div>

          <div className="inputs">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={addInfo}
              value={userInfo.email}
            />
          </div>
          <div className="inputs">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={addInfo}
              value={userInfo.phone}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Set Password</label>
            <input
              type="password"
              name="password"
              onChange={addInfo}
              value={userInfo.password}
            />
          </div>

          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={addInfo}
            value={userInfo.gender}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p style={{ fontSize: "12px", marginTop: "20px" }}>
            By registering you agree to Techtrend Africa's{" "}
            <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
          </p>
          <Link to="/login">
            <ButtonAlt
              text="Create my account"
              style={{ background: " #3E0563", color: "#fff" }}
              onclick={handleClick}
            />
          </Link>
        </form>
      </div>
      <img src="images\Group 4 (1).png" alt="" className="frame group41" />
      <img src="images\Group 5 (1).png" alt="" className="frame group51" />
      <img src="images\Group 6.png" alt="" className="frame group6" />
      <img src="images\Group 9.png" alt="" className="frame group9" />
      <img src="images\Group 7 (1).png" alt="" className="frame group71" />
      <img src="images\Group 8.png" alt="" className="frame group8" />
    </div>
  );
};

export default Register;
