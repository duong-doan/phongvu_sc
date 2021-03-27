import React from 'react';
import './Header.scss'

import BannerAds from './BannerAds/BannerAds';
import Contact from './Contact/Contact';

const Header = (props) => {
    return (
        <div className="header">
            <BannerAds />
            <Contact />
        </div>
    );
}

export default Header;