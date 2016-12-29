var React = require('react');

var About = (props) => {
  return (
    <div>
    <h3 className="text-center">About Component</h3>
    <div className="media-object">
    <div className="media-object-section">
      <img src= "http://placeimg.com/200/200/people" />
    </div>
    <div className="media-object-section">
      <h4>Dreams feel real while we're in them.</h4>
      <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
    </div>
    </div>
  </div>
  )
};

module.exports = About;
