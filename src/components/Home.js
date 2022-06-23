import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header flex-column" style={{ padding: "20px" }}>
      <h1>First Ever Tech Personality Award For Africans in Europe</h1>
      <Search />
      <div className="categories-link">
        <Link to="/categories">View all categories &rarr;</Link>
      </div>
    </div>
  );
};
const Target = () => {
  return (
    <div className="target">
      <h1>Our Target</h1>
      <div className="flex diagrams">
        <div className="diagram flex-column ">
          <img src="images\freepik--character-1--inject-261.png" alt="" />
          <p>Awareness</p>
        </div>
        <div className="diagram flex-column">
          <img src="images\freepik--Target--inject-210.png" alt="" />
          <p>Competition</p>
        </div>
        <div className="diagram flex-column">
          <img src="images\freepik--Target--inject-210.png" alt="" />
          <p>Entertainment</p>
        </div>
        <div className="diagram flex-column">
          <img src="images\trophy-svgrepo-com 1.png" alt="" />
          <p>Recognition</p>
        </div>
      </div>
      <img src="images\Frame 46.png" alt="" className="frame frame46" />
      <img src="images\Frame 48.png" alt="" className="frame frame48" />
      <img src="images\Frame 47.png" alt="" className="frame frame47" />
      <img src="images\Frame 45.png" alt="" className="frame frame45" />
    </div>
  );
};
const Grid = () => {
  return (
    <div className="grid-lock">
      <div className="first-award">
        <div className="whatsapp">
          <img src="images\WhatsApp Image 2022-02-10 at 10.38 2.png" alt="" />
        </div>
        <div className="award-details">
          <h3>The Connected Awards</h3>
          <p>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>
          <Link to="/about">
            <Button text="Learn More" />
          </Link>
        </div>
        <img src="images\Group 21.png" alt="" className="first" />
      </div>
      <div className="second-award">
        <div className="award-details">
          <h3>Celebrated Techies</h3>
          <p>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>
          <Link to="/past">
            <Button text="Read More" />
          </Link>
        </div>
        <div className="grid">
          <img src="images\WhatsApp Image 2022-02-10 at 10.39 1.png" alt="" />
          <img src="images\WhatsApp Image 2022-02-12 at 11.18 1.png" alt="" />
          <img src="images\WhatsApp Image 2022-02-12 at 11.25 1.png" alt="" />
          <img src="images\Kacy Techtrend Award 1  1.png" alt="" />
        </div>
        <img src="images\Group 21.png" alt="" className="second" />
      </div>
    </div>
  );
};
const Talent = () => {
  return (
    <div className="talents flex">
      <div className="talent flex-column">
        <img src="images\ribbon-svgrepo-com (1) 1.png" alt="" />
        <h3>Promising Talent</h3>
        <p>
          Promising Talent is an individual with less than 5 years experience in
          Nigeria technology ecosystem. Such individual are well recognized in
          their field for impacting with their skills.
        </p>
      </div>
      <div className="talent flex-column">
        <img src="images\star-svgrepo-com (2) 1.png" alt="" />
        <h3>Exceptional Talent</h3>
        <p>
          Exceptional Talent is an individual with more than 5 years experience
          in Nigeria technology ecosystem. Such individual are well recognized
          in their field for impacting with their skills.
        </p>
      </div>
      <div className="talent flex-column">
        <img src="images\Frame 43.png" alt="" />
        <h3>Intermediate Talent</h3>
        <p>
          Intermediate Talent is an individual with less than 5 years experience
          in Nigeria technology ecosystem. Such individual are well recognized
          in their field for impacting with their skills.
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Target />
      <Grid />
      <Talent />
      <Footer />
    </div>
  );
};

export default Home;
