import React from 'react';
import './OutstandBrand.scss'

import ProductItemAdsHorizontal from '../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'
import brandMsi from '../../../assets/images/outstand_brand/brand-msi.webp'
import brandHp from '../../../assets/images/outstand_brand/brand-hp.webp'
import brandLg from '../../../assets/images/outstand_brand/brand-lg.webp'
import brandLenovo from '../../../assets/images/outstand_brand/brand-lenovo.webp'
import { Link } from 'react-router-dom';

const OutstandBrand = () => {

    return (
        <div className="main__outstand_brand">
            <h4>Thương hiệu nổi bật</h4>
            <div className="main__outstand_brand-list">
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url={brandMsi}
                        name="MSI"
                        desc="Made for Gamers and Creators" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url={brandHp}
                        name="HP"
                        desc="Lễ hội máy tính HP - Ưu đãi cực phê" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url={brandLg}
                        name="LG"
                        desc="Tháng LG quà mê ly" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url={brandLenovo}
                        name="Lenovo"
                        desc="Laptop Chơi Game Thực Thụ" />
                </Link>
            </div>
        </div>
    )
}

export default OutstandBrand
