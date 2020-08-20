import React , {useEffect}from 'react';
import './Footer.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer(){

  // useEffect(() => {
  //   Aos.init({
  //     once:true,
  //   duration: 2000})
  // }, []);

    return(
      <div className="top-space">
        {/* <div className="footer" data-aos ="fade-up" data-aos-easing="ease-in-out"> */}
         <div className="footer"> 
          <p className="footer-text"> Developed and Designed by <br></br>Saloni Lakhotia  <i class="fa fa-heart"></i></p>
          </div>
      </div>
    );
}
export default Footer