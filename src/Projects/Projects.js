import React from 'react'
import './Project.css';
import Footer from '../Footer/Footer';
import Dart from "./Project Photos/Dart.png"; 
import Flutter from "./Project Photos/flutter.png";
import HTML from "./Project Photos/html5.png";
import CSS from "./Project Photos/css3.png";
import java from "./Project Photos/java.png";
import react from "./Project Photos/react.png";
import Illustrator from "./Project Photos/Illustrator.png";
import Figma from "./Project Photos/figma.png";
import AdobeXD from "./Project Photos/adobeXD.png";
import VSCode from "./Project Photos/vscode.png";
import Firebase from "./Project Photos/firebase.png";
import Bootstrap from "./Project Photos/bootstrap4.png";
import mysql from "./Project Photos/js.png";
import js from "./Project Photos/mysql.png";

import Background from '../Home/photos/IMG20191201174113.jpg';
import SimpleSlider from './SimpleSlider';

function Projects(){
    return(
      <div>
      <div className="whole">
      <div className="project-text">These are some of the projects made by me while learning!!</div>
      <div className="tech-icons row">
{/* Dart, flutter, firebase, illustartor, adobe xd, figma, vscode, java, react, js, */}
      <ul>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Flutter} alt="icon" /></li>
        <li><img className="tech-icon" src={HTML} alt="icon" /></li>
        <li><img className="tech-icon" src={CSS} alt="icon" /></li>
        <li><img className="tech-icon" src={Bootstrap} alt="icon" /></li>
        <li><img className="tech-icon" src={js} alt="icon" /></li>
        <li><img className="tech-icon" src={java} alt="icon" /></li>
        <li><img className="tech-icon" src={react} alt="icon" /></li>
        <li><img className="tech-icon" src={Firebase} alt="icon" /></li>
        <li><img className="tech-icon" src={Illustrator} alt="icon" /></li>
        <li><img className="tech-icon" src={Figma} alt="icon" /></li>
        <li><img className="tech-icon" src={AdobeXD} alt="icon" /></li>
        <li><img className="tech-icon" src={VSCode} alt="icon" /></li>
        <li><img className="tech-icon" src={mysql} alt="icon" /></li>
      </ul>


{/*   chatapp, portfolio, impNotes, expenses, githubAPI , TodoFlutter,hospitalmanagement           */}
      </div>
          <div className="row project-row">
            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src={Background} alt="project-image" />
                  <span className="card-title">CHAT APP</span>
                </div>
                <div className="card-content">
                  <p>This is a kind of a ChatApp which is made using Flutter and Firebase.It has a 
                  proper login and signup feature with the settings option showing the group members details.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/ChatApp">Github Repo Link</a>
                </div>
              </div>
            </div>
            

            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src= {Background} alt="project-image" />
                  <span className="card-title">IMP NOTES</span>
                </div>
                <div className="card-content">
                  <p>React based website which has an option of settingthe note priority wise
                  . One can delete or add the notes.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/ImpNotes">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src={Background} />
                  <span className="card-title" alt="project-image" >EXPENSES</span>
                </div>
                <div className="card-content">
                  <p>Flutter and Firebase app which save your expenses based on the data and amount.
                  This will help you to take your money in account.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/expenses">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src= {Background} alt="project-image" />
                  <span className="card-title">WEBSITE</span>
                </div>
                <div className="card-content">
                  <p>Designed a website using HTML and CSS. Just trying my hand in website designing.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

          </div>            
            <div className="row project-row">
            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src= {Background} alt="project-image" />
                  <span className="card-title">WEBSITE</span>
                </div>
                <div className="card-content">
                  <p>Designed a website using HTML and CSS. Just trying my hand in website designing.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src= {Background} alt="project-image" />
                  <span className="card-title">WEBSITE</span>
                </div>
                <div className="card-content">
                  <p>Designed a website using HTML and CSS. Just trying my hand in website designing.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-image">
                  <img src={Background} />
                  <span className="card-title" alt="project-image" >FIRST WEBSITE</span>
                </div>
                <div className="card-content">
                  <p>This is the first full website I made. </p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/first_website">Github Repo Link</a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Footer />
      </div>
    );
}
export default Projects