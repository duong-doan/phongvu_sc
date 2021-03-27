import React from 'react';
import './BannerAds.scss'
import Carousel from 'react-bootstrap/Carousel'

const BannerAds = (props) => {

  const closeAds = () => {
    const closeEl = document.querySelector('.header__banner')
    console.log(closeEl);
    closeEl.setAttribute('style', 'display: none')
  }

  return (
    <div className="header__banner">
      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        fade>
        <Carousel.Item>
          <img
            className="banner1"
            src="https://lh3.googleusercontent.com/scMdiksFUWM2Fq8hDOCoWcIII-LpTvqC78ddZH93ZH0rwuDtURpUKgqwkvPG_AhXSFKVj9KHnGbsgHu595f_zqfaWX5uV7w=w1920-rw"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner2"
            src="https://lh3.googleusercontent.com/scMdiksFUWM2Fq8hDOCoWcIII-LpTvqC78ddZH93ZH0rwuDtURpUKgqwkvPG_AhXSFKVj9KHnGbsgHu595f_zqfaWX5uV7w=w1920-rw"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div id="mdiv" onClick={closeAds}>
        <div className="mdiv">
          <div className="md"></div>
        </div>
      </div>
    </div>
  );
}

export default BannerAds;