import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAlt from "./ButtonAlt";

const Login = ({ user, oncorrect }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [correct, setCorrect] = useState(false);

  const addInfo = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };
  const handleClick = function (e) {
    // e.preventDefault();
    user.forEach((use) => {
      if (use.email === userInfo.email && use.password === userInfo.password) {
        oncorrect(use.email);
        setCorrect(true);
        console.log("lhdhdh");
      }
    });
  };

  return (
    <div className="accounts">
      <div className="logins">
        <h4>Let's pick up where we left off yeah?</h4>
        <h6>Log in to your account</h6>
        <p>
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>
        <ButtonAlt
          text=" Continue with google "
          style={{
            backgrouundColor: "rgba(216, 205, 224, 0.1)",
            border: "1px solid #D8CDE0",
          }}
        />

        <p className="or">Or</p>
        <form>
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
            <label htmlFor="password">Set Password</label>
            <input
              type="password"
              name="password"
              onChange={addInfo}
              value={userInfo.password}
            />
          </div>
          <Link to={correct ? "/categories" : correct}>
            <ButtonAlt
              text="Log in"
              style={{ background: " #3E0563", color: "#fff" }}
              onclick={handleClick}
            />
          </Link>
        </form>
        <a href="#4" style={{ color: "#3E0563", justifySelf: "center" }}>
          Forgot Pasword
        </a>
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
export default Login;
