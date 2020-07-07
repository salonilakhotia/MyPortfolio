import React from 'react'
import './Project.css';
import Dart from "./Project Photos/Dart.png"; 
import Background from '../Home/photos/IMG20191201174113.jpg';

function Projects(){
    return(
      <div>
      <div className="project-text">These are some of the projects made by me while learning!!</div>
      <div className="tech-icons row">
{/* Dart, flutter, firebase, illustartor, adobe xd, figma, vscode, java, react, js, */}
      <ul>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
        <li><img className="tech-icon" src={Dart} alt="icon" /></li>
      </ul>
               
      </div>
          <div className="row project-row">
            <div className="col s12 m7">
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
            

            <div className="col s12 m7">
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

            <div className="col s12 m7">
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
          </div>


          <div className="row project-row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={Background} alt="project-image" />
                  <span className="card-title">TODO APP</span>
                </div>
                <div className="card-content">
                  <p>Flutter and Firebase App to add and delete todo list. </p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/salonilakhotia/TodoApp">Github Repo Link</a>
                </div>
              </div>
            </div>
            

            <div className="col s12 m7">
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

            <div className="col s12 m7">
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


          <div className="footer-project">
           Copyright @ SL
          </div>
      </div>
    );
}
export default Projects