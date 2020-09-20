import React from 'react'
import './Project.css';
import Header from '../NavBar/Header';
import Footer from '../Footer/Footer';
import Dart from "./Project Photos/Dart.png"; 
import Flutter from "./Project Photos/flutter1.png";
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

import ChatApp from './Project Photos/ChatApp.jpg';
import Expenses from './Project Photos/Expenses.jpg';
import GitApiApp from './Project Photos/GitApiApp.jpg';
import ImpNotes from './Project Photos/impNotes.jpg';
import Design from './Project Photos/Design.jpg';
import FirstWeb from './Project Photos/FirstWeb.jpg';
import Portfolio from './Project Photos/Portfolio.jpg';
import Hospital from './Project Photos/Hospital.jpg';


function Projects(){
    return(
      <div>
      <Header />
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
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src={ChatApp} alt="project-image" />
                  <span className="card-title">CHAT APP</span>
                </div>
                <div className="card-content">
                  <p>This is a kind of a ChatApp which is made using Flutter and Firebase.It has a 
                  proper login and signup feature with basic settings option.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/ChatApp">Github Repo Link</a>
                </div>
              </div>
            </div>
            

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src= {ImpNotes} alt="project-image" />
                  <span className="card-title" >IMP NOTES</span>
                </div>
                <div className="card-content">
                  <p>React based website which has an option of setting the note priority wise
                  . One can delete or add the notes.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/ImpNotes" >Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src={Design}  alt="project-image" />
                  <span className="card-title" alt="project-image" >DESIGNING</span>
                </div>
                <div className="card-content">
                  <p>The below links contain all the UI/UX designs done by my till now. </p>
                </div>
                <div className="card-action">
                  <a href="https://drive.google.com/drive/folders/1fO3A93S7VIOyrgJ0y__YXS-8ex31ZX6V">Drive Link</a>
                </div>
              </div>
            </div>

            
            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src= {GitApiApp} alt="project-image" />
                  <span className="card-title" style={{color:"white"}}>GIT API APP</span>
                </div>
                <div className="card-content">
                  <p>Flutter app which shows the details of the Github Profile of an user.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

          </div>  

            <div className="row project-row">
            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src= {Hospital} alt="project-image" />
                  <span className="card-title special-text">HOSPITAL MANAGEMENT</span>
                </div>
                <div className="card-content">
                  <p>Website to manage the internal workings of the hospital. A team project on MERN and using MySQL.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src= {Portfolio} alt="project-image" />
                  <span className="card-title" style={{color:"white"}}>PORTFOLIO</span>
                </div>
                <div className="card-content">
                  <p>My own portfolio website.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/MyPortfolio">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src= {FirstWeb} alt="project-image" />
                  <span className="card-title">FIRST WEBSITE</span>
                </div>
                <div className="card-content">
                  <p>Designed a website using HTML and CSS. Just trying my hand in website designing.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/DevelopedWebsite">Github Repo Link</a>
                </div>
              </div>
            </div>

            <div className=" col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src={Expenses} alt="project-image" />
                  <span className="card-title" alt="project-image" >EXPENSES</span>
                </div>
                <div className="card-content">
                  <p>Flutter and Firebase app which save your expenses details based on the data and amount.</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/expenses">Github Repo Link</a>
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