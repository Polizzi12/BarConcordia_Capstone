import React from 'react';
import bannerImage from '../assets/bar.jpg';

const Banner = () => {
    return (
      <div className="banner-container">
            <img src={bannerImage} alt="Bar Concordia" className="banner-image" />
        </div>
    );
  }

  export default Banner;
  