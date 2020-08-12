import React from 'react'
import './AboutMe.css';
import SimpleSlider from '../Projects/SimpleSlider';

function AboutMe(){
    return(
      <div>
        {/* <div className = "contact-title">
          <h1>Hey..I hope you Like my website :)</h1>
          <h2>Here is the way you can contact me !!</h2>
        </div>

        <div className="contact-form">
          <form id="contact-form" method = "post" action ="" >
            <input name = "name" type="text" className="form-control" placeholder="Your Name" required />
            <input name = "email" type="text" className="form-control" placeholder="Your Email" required />
            <textarea name = "message" className="form-control" placeholder="Message" rows="4" required/> 
            <input type="submit" className="form-control submit" value = "Send Message" />
          </form>
          
        </div> */}

        <SimpleSlider />
      </div>
    );
}
export default AboutMe