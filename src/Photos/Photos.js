import React from 'react';
import './Photos.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';

function Photos(){
    return(
      <div>
      <div className="background">
        <div className="box">
            <div className="slideshow">
                <div className="slideshow-item">
                       <img src={image2} />
                    <div className="slideshow-item-text">
                        <h2>I am a web developer</h2>
                    </div>
                </div>
    
                <div className="slideshow-item">
                   
                    <img src={image2} />
                <div className="slideshow-item-text">
                    <h2>Flutter Lover</h2>
                </div>
              
                </div>
        
                <div className="slideshow-item">
                    
                        <img src={image3} />
                    <div className="slideshow-item-text">
                        <h2>Interested in UI/UX</h2>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default Photos;