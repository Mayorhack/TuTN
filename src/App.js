import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Categories from "./components/Categories";
import Vote from "./components/Vote";
import Buy from "./components/Buy";
import Future from "./components/Future";
import Past from "./components/Past";
import Donations from "./components/Donations";

function App() {
  const [user, setUser] = useState([]);
  const handleClick = (info) => {
    setUser((prev) => {
      return [...prev, info];
    });
  };
  const [stackData, setStackData] = useState("");
  const getStack = function (stack) {
    setStackData(stack);
  };
  const [currentUser, setCurrentUser] = useState("Mayowa");
  const handleLogin = function (email) {
    setCurrentUser(`${user[0].firstname} ${user[0].lastname}`);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/register"
            element={<Register onclick={handleClick} />}
          ></Route>
          <Route
            path="/login"
            element={<Login user={user} oncorrect={handleLogin} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/categories"
            element={
              <Categories onclick={getStack} currentUser={currentUser} />
            }
          ></Route>
          <Route
            path="/vote"
            element={<Vote text={stackData} currentUser={currentUser} />}
          ></Route>
          <Route
            path="/buy"
            element={<Buy currentUser={currentUser} />}
          ></Route>
          <Route
            path="/future"
            element={<Future currentUser={currentUser} />}
          ></Route>
          <Route
            path="/past"
            element={<Past currentUser={currentUser} />}
          ></Route>
          <Route
            path="/donations"
            element={<Donations currentUser={currentUser} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
