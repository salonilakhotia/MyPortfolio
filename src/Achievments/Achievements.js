import React from 'react';
import './Achievements.css';
import Background from '../Home/photos/IMG20191201174113.jpg';


 function Achievements(){
    return(
        <div>
        <div className="row">
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
        </div>


        </div>
    );
 }

 export default Achievements;