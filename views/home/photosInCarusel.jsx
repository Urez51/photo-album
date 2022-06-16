const React = require('react');
// const LayoutHome = require('./LayoutHome');

module.exports = function photoInCarusel({ url }) {
  return (
    // <div className="carousel-item active">
    //   <img src={url} className="d-block w-100" alt="..." />
    // </div>
    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777" />
      <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
    </svg>
  );
};
