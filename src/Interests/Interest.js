import React from 'react'
import Slide from 'react-reveal/Slide'
import Header from '../NavBar/Header';

import './Interest.css'
import Footer from '../Footer/Footer';
import TwoD from './Interest-Photos/Art/2d.jpg';
import cup from './Interest-Photos/Art/cup.jpg';
import Eyes from './Interest-Photos/Art/Eyes.jpg';
import Girl from './Interest-Photos/Art/Girl.jpg';
import Guitar from './Interest-Photos/Art/guitar.jpg';
import Mandala from './Interest-Photos/Art/mandala.jpg';
import Peacock from './Interest-Photos/Art/peacock.jpg';
import Rangoli from './Interest-Photos/Art/Rangoli.jpg';
import Emma from './Interest-Photos/Illustration/Emma.png';
import Butterfly from './Interest-Photos/Illustration/butterfly-01.jpg';
import Avatar from './Interest-Photos/Illustration/avatar.png';
import Flaunting from './Interest-Photos/Illustration/flaunting.png';
import HarryPotter from './Interest-Photos/Illustration/harrypotter-01.jpg';
import Mom from './Interest-Photos/Illustration/Mom-01.jpg';
import RoseGirl from './Interest-Photos/Illustration/roseGirl-01.jpg';
import Laptop from './Interest-Photos/Illustration/laptop.jpg';
import HP from './Interest-Photos/Series/Harrypotter-01.jpg';
import Originals from './Interest-Photos/Series/originals-01.jpg';
import TVD from './Interest-Photos/Series/tvd-01.jpg';
import Stranger from './Interest-Photos/Series/strangerThings-01.jpg';



function Interests(){
    return(
      <div>
      <div style = {{padding: "30px"}}></div>
      <Header />
       
         <div className="topic">Illustration <span role="img">💖</span> </div>
         <p className="content"> Creativity makes the world go round and round and round.</p>

          
          <div className="row">
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Mom} alt="img" />
              <div className="overlay"><div className="text">First Ever Digital Portrait</div></div>
            </div>
            </Slide>
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={RoseGirl} alt="img" />
              <div className="overlay"><div className="text">Mind is calm <br></br>when eyes are closed</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Laptop} alt="img" />
              <div className="overlay"><div className="text">Can't imagine me without it!!</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Avatar} alt="img" />
              <div className="overlay"><div className="text">Tried a Horror Maid Avatar </div></div>
            </div>  
            </Slide>
          </div>

          <div className="row">
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Emma} alt="img" />
              <div className="overlay"><div className="text">The lesser you reveal, more people can wonder !</div></div>
            </div>
            </Slide>
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Flaunting} alt="img" />
              <div className="overlay"><div className="text">A Girl has every shade of color in herself.</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Butterfly} alt="img" />
              <div className="overlay"><div className="text">Your Wings already exist <br></br>All you have to do is Fly!!</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={HarryPotter} alt="img" />
              <div className="overlay"><div className="text">You are a Wizard, Harry!!</div></div>
            </div>
            </Slide>
          </div>
     

       
         <div className="topic">Art👩‍🎨 </div>
         <p className="content">Art enables us to find ourselves and lose ourselves at the same time.</p>
        
          <div className="image">
          <div className="row">
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Peacock} alt="img" />
              <div className="overlay"><div className="text">Stood First in Infotsav IIIT Gwalior</div></div>
            </div>
            </Slide>
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Girl} alt="img" />
              <div className="overlay"><div className="text">Ethics and Color!!<br></br>Great Combo:)</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Eyes} alt="img" />
              <div className="overlay"><div className="text">Eyes always told the truth</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={TwoD} alt="img" />
              <div className="overlay"><div className="text">Once Visual changes everything!!!</div></div>
            </div>
            </Slide>
          </div>
          <div className="row">
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Mandala} alt="img" />
              <div className="overlay"><div className="text">Accuracy is all one needed :)</div></div>
            </div>
            </Slide>
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={cup} alt="img" />
              <div class="overlay"><div class="text">We are surronded by <br></br>Demons and Devils</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Guitar} alt="img" />
              <div className="overlay"><div className="text">Music changes all moods</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Rangoli} alt="img" />
              <div className="overlay"><div className="text">Australia Fire</div></div>
            </div>
            </Slide>
          </div>  
          </div>
      
         <div className="topic">Series🎥 </div>
         <p className="content">Some of the series I love.</p>
    {/* yjhd, znmd, tvd, splitsvilla , harrypotter, */}    
          <div className="image">
          <div className="row">
          <Slide left>
          <div className="img-div">
              <img className="interest-img" src={HP} alt="img" />
              <div className="overlay"><div className="text">Something Evil has Returned to Hogwarts!</div></div>
            </div>
            </Slide>
            <Slide left>
            <div className="img-div">
              <img className="interest-img" src={Originals} alt="img" />
              <div className="overlay"><div className="text">Always and Forever!!</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={TVD} alt="img" />
              <div className="overlay"><div className="text">I will always choose you.</div></div>
            </div>
            </Slide>
            <Slide right>
            <div className="img-div">
              <img className="interest-img" src={Stranger} alt="img" />
              <div className="overlay"><div className="text">Friends don't lie!!</div></div>
            </div>
            </Slide>
          </div>  
          </div>

        <Footer />
      </div>
    );
}
export default Interests