import React from "react";
import Background from "./photos/profile-02.png";
import Project1 from "./photos/P1.png";
import Project2 from "./photos/P2.png";
import Project3 from "./photos/P3.png";
import Project4 from "./photos/P4.png";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./home.css";

function Home() {
  return (
    <div className="home">
      {/* <div style = {{padding: "30px"}}></div> */}
      <Header />
      <div>
        <div className="outer-box row">
          <div className="col">
            <div className="Image">
              <img className="Image" src={Background} />
            </div>
          </div>
          <div className="col">
            <div className="intro">
              <div style={{ padding: "30px" }}></div>

              <h1 className="Heading">Saloni Lakhotia</h1>
              <br></br>
              <h2 className="subHeading">Product Designer & Tech-Enthusiast</h2>
              <br></br>
              <p className="para">
                Enthusiastic, creative designer and developer with solid problem
                solving skills. I am pursuing B.Tech in Computer Science from
                the IIIT, Vadodara. <br></br>I like to explore new things and
                meet new people. Apart from this, I like to dance 💃 in my own
                space but the love for art🎨 is above all.
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ padding: "40px" }}></div> */}

        <div className="topic">Projects</div>
        <br></br>

        <div className="space"></div>

        <div className="row2">
          <div className="column">
            <div className="PImage right">
              <a href=" ">
                <img className="Image" src={Project1} />
              </a>
            </div>
          </div>

          <div className="column">
            <div className="PImage left">
              <a href=" ">
                <img className="Image" src={Project2} />
              </a>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="column">
            <div className="PImage right">
              <a href=" ">
                <img className="Image" src={Project3} />
              </a>
            </div>
          </div>

          <div className="column">
            <div className="PImage left">
              <a href=" ">
                <img className="Image" src={Project4} />
              </a>
            </div>
          </div>
        </div>

        <div className="space"></div>
        <div className="space"></div>

        <h2
          className="subHeading sayHi"
        >
          Say hi, and let's chat! ✌️{" "}
        </h2>
        <br></br>
        <p className="chat">
          Shoot me a email at{" "}
          <span style={{ color: "#afb77e" }}>salonilakhotia242@gmail.com </span>{" "}
          or find me at
        </p>

        <div className="icons">
          <div className="icon">
            <a href="https://github.com/salonilakhotia">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.behance.net/salonilakhotia">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://dribbble.com/SALONI242">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/saloni-lakhotia-11b0a7175">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div style={{ padding: "40px" }}></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
