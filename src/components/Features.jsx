import React from 'react';
import featureimage from '../images/Frame 19.png';
function Features() {
  return (
    <div id="features">
        <div className="features-model">
            <img src={featureimage} alt='features'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3> This Framework <span></span> <span>is an art</span></h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        </div>
    </div>
  );
}

export default Features;
