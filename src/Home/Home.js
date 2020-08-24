import React from 'react';
import Fade from 'react-reveal/Fade';
//import Flash from 'react-reveal/Flash';
import Background from './photos/Me.jpg';
import facebook from "./photos/facebook.svg";
import github from "./photos/github.svg";
import instagram from "./photos/instagram.svg";
import linkedin from "./photos/linkedin.svg";
import Footer from '../Footer/Footer';
import './home.css';

function Home(){
    return(
        <div className="home">
        <div>
            <div className="outer-box row">
                <div className="col">
                <div className="Image"><img className = "Image" src={Background} /></div>
                </div>
                <div className="col">
                <div  className="intro">
                    <Fade bottom big cascade><h1 className="Heading">Saloni Lakhotia</h1></Fade>
                    {/* <div className="color-animation1 Heading">Saloni </div>
                    <div className="color-animation2 Heading">Lakhotia</div> */}
                   
                    <br></br>
                    <h2 className="subHeading">B. Tech. Student,  IIIT Vadodara</h2>
                    <br></br>
                    <p style ={{fontSize : "20px", fontWeight : "medium", color : "pink"}}>I'm an UI/UX Designer , Flutter Lover and Web Developer.
                    <br></br>Exploring new fields 💯✨</p>    
                </div>
                 <div className="icons">
                    <a href="https://github.com/salonilakhotia"><img className="icon" src={github} alt="icon"></img></a>
                    <a href="https://www.instagram.com/saloni_lakhotia_/"><img className="icon" src={instagram} alt="icon"></img></a>
                    <a href="https://www.facebook.com/saloni.lakhotia.242"><img className="icon" src={facebook} alt="icon"></img></a>
                    <a href="https://www.linkedin.com/in/saloni-lakhotia-11b0a7175"><img className="icon" src={linkedin} alt="icon"></img></a>
                 </div>
                </div>
            </div>
            <div className="description"> </div>
            <div className="About-Me">
                <h1 className="Heading">More About Me</h1>
                <h3 className="subHeading">Hello everyone👩‍💻 :)</h3>
                <br></br>
                <p className="desc-aboutme" style ={{fontSize : "20px", fontWeight : "medium", color : "pink"}}>I am pursing B.tech in Computer Science from Indian Institute of Technology, Vadodara. Recently in 3rd year of my graduation.<br></br>
                I started Flutter and after some time I kinda start loving it. Right now also, many things are left to explore in.<br></br>
                I am a front-end developer and love designing things in my own way.
                <br></br>
                <a href="#" classname="design-drive">Here</a> are some of my designs!!!
                <br></br>
                Still also exploring more and more fields I can. Recently, I am trying my hands on ML.
                <br></br>I love to dance💃 in my own space but love the art🎨 between all.
                </p>
                <br></br><br></br>
                <h1 className="subHeading" >Available for any collaboration and ideas!!!<br></br>Feel free to contact!!</h1>
            </div>
            <div className="description"> </div>
            <Footer />
            </div>
        </div>
    );
}

export default Home

/* 

<div className="home">
          <div className="Hometext">
              <img className = "Image" src={Background} />
              <div className="home-text name">Saloni Lakhotia</div><br></br>
              <div className="All_Icons">
              <ul>
                <li><a href="https://github.com/salonilakhotia"><img className="icon" src={github} alt="icon"></img></a></li>
                <li><a href="https://www.instagram.com/saloni_lakhotia_/"><img className="icon" src={instagram} alt="icon"></img></a></li>
                <li><a href="https://www.facebook.com/saloni.lakhotia.242"><img className="icon" src={facebook} alt="icon"></img></a></li>
                <li><a href="https://www.linkedin.com/in/saloni-lakhotia-11b0a7175"><img className="icon" src={linkedin} alt="icon"></img></a></li>
              </ul>
              </div> //all_icons
          </div>
          <div className= "home-text text2" >Hey!!! welcome to home page!!!.Hey!!! welcome to home page!!!.</div>
        </div>
        <Footer />
</div>
*/