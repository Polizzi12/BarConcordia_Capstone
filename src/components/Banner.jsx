import React from 'react';
import bannerImage from '../assets/bar.jpg';

const Banner = () => {
    return (
      <div>
        <img src={bannerImage} alt="Bar Concordia" style={{ width: '100%', height: 'auto' }} />
      </div>
    );
  }

  export default Banner;
  