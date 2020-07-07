import React from 'react'
import './Interest.css'
import Dart from './Interest-Photos/IMG20191201174113.jpg'

function Interests(){
    return(
      <div>
        <div className="topic">
         <div className="Interest-topic">Illustration </div>
         <p className="Interest-topic content">I Love to do designing using Illustrator. These are some of them.</p>
        
          <div className="image">
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>
          </div>
       </div>

       <div className="topic">
         <div className="Interest-topic">Art </div>
         <p className="Interest-topic content">I Love to do designing using Illustrator. These are some of them.</p>
        
          <div className="image">
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>  
          </div>
       </div>

       <div className="topic">
         <div className="Interest-topic">Movies/Series </div>
         <p className="Interest-topic content">I Love to do designing using Illustrator. These are some of them.</p>
    {/* yjhd, znmd, tvd, splitsvilla , harrypotter, */}    
          <div className="image">
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>  
          </div>
       </div>

       <div className="topic">
         <div className="Interest-topic">Dancing </div>
         <p className="Interest-topic content">I Love to do designing using Illustrator. These are some of them.</p>
        
          <div className="image">
          <div className="row">
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
            <div><img className="interest-img" src={Dart} alt="img" /></div>
          </div>  
          </div>
       </div>

      </div>
    );
}
export default Interests