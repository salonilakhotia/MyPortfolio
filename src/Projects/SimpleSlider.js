import React from 'react';
import './SimpleSlider.css';
import image1 from './Project Photos/html5.png';
import image2 from './Project Photos/flutter.png';
import image3 from './Project Photos/Illustrator.png';
import Footer from '../Footer/Footer';

function SimpleSlider(){
    return(
      <div>
      <div className="background">
        <div className="box">
            <div className="slideshow1">
                <div className="slideshow-item1">
                       <img src={image1} />
                </div>
                <div className="slideshow-item1">
                    <img src={image2} />
                </div>
                <div className="slideshow-item1">
                    <img src={image3} />
                </div>
            </div>
          </div>
        </div>
     </div>
    );
}

export default SimpleSlider;
// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import './SimpleSlider.css';
 
// const slideImages = [
//   './Project Photos/flutter.png',  
//   './Project Photos/flutter.png',
//   './Project Photos/Dart.png'
// ];
 
// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Slide>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// }

// export default Slideshow


// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows :  true
//     };

//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//            <h3 >1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

