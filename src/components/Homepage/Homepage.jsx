import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Homepage.css";
import bmw from "../image/bmw.svg";
import audi from "../image/audi.svg";
import instagram from "../image/instagram.svg";
import twitter from "../image/twitter.svg";
import facebook from "../image/facebook.svg";
import appstore from "../image/app-store-badge.svg";
import playstore from "../image/google-play-badge.svg";
import rollsroyce from "../image/rolls-royce.svg";
import man from "../image/man.avif";
import man2 from "../image/man2.avif";
import man3 from "../image/man3.avif";
import man4 from "../image/man4.jpg";
import Animate from "./Animate.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/showprofile')
      .then(response => response.json())
      .then(user => {
        setData(user)
        console.log(`${user.email}`)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section className="first-section">
        <div className="background">
          <div className="homecontainer">
            <div className="left-content">
              <Animate />
              <p>
                Whether you're heading to a busy event, catching a flight, or
                simply want peace of mind while you shop, booking ahead ensures
                you'll have a guaranteed spot waiting for you. Avoid the stress
                of finding a space on the fly and enjoy a seamless parking
                experience. Reserve now and make your journey smoother.
              </p>

              <div className="hero-btn">
                <button>
                  <Link className={"a"} to="/Country">
                    Available country
                  </Link>{" "}
                </button>
              </div>

              <div className="shopping">
                <p>They already collaborate with us:</p>

                <div className="brand-icons">
                  <div className="background">
                    <img src={bmw} alt="" />
                    <img src={audi} alt="" />
                    <img src={rollsroyce} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="second-section">
        <div class="container">
          <div class="item item1">
            <p>100+</p>
            <p>Team Member</p>
          </div>
          <div class="item item2">
            <p>500+</p>
            <p>Total Parkings</p>
          </div>
          <div class="item item3">
            <p>130000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>

      <div className="image"></div>
      <div class="team">
        <div className="mainteam">
          <div className="background">
            <div class="team-info">
              <div class="item item1">
                <div class="image-section">
                  <img src={man} alt="" />
                </div>
                <p>Deep</p>
                <p>DIRECTOR</p>
              </div>
              <div class="item item2">
                <div class="image-section">
                  <img src={man2} alt="" />
                </div>
                <p>Divyesh</p>
                <p>DIRECTOR</p>
              </div>
              <div class="item item3">
                <div class="image-section">
                  <img src={man3} alt="" />
                </div>
                <p>Ruchit</p>
                <p>COPYWRITER</p>
              </div>
              <div class="item item4">
                <div class="image-section">
                  <img src={man4} alt="" />
                </div>
                <p>Dishant</p>
                <p>COPYWRITER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-icons">
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="badge">
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
        <p>&copy; 2024 Park+. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
