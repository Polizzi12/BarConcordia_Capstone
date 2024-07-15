import React from 'react';
import bannerImage from '../assets/bar.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Banner = () => {
    return (
      <div className="banner-container">
            <img src={bannerImage} alt="Bar Concordia" className="banner-image" />
            {/* <h1 className="welcome-text" >Welcome</h1> */}
        </div>
    );
  }

  export default Banner;
  