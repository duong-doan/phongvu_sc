import React from 'react';
import { Link } from 'react-router-dom';
import './OutstandBrand.scss'

import ProductItemAdsHorizontal from '../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'

const OutstandBrand = () => {

    return (
        <div className="main__outstand_brand">
            <h4>Thương hiệu nổi bật</h4>
            <div className="main__outstand_brand-list">
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url="https://lh3.googleusercontent.com/BdoRaaplaDNYSYRbYGinL43LaoWGrnansdiMDgawSksBM7NxlERC0SoVgvUh4H8rRnUCVHVNOxGvD7flVmNh=rw"
                        name="MSI"
                        desc="Made for Gamers and Creators" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url="https://lh3.googleusercontent.com/sgQpul0smf3zXy4JOgD7OLzhadi_PbhS2FzocH5rv8rayiKyREPBgCAmlZE_YWuXTb6S1D5kExErV6PCOQ=rw"
                        name="HP"
                        desc="Lễ hội máy tính HP - Ưu đãi cực phê" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url="https://lh3.googleusercontent.com/l2y1xkUV5p_aRjxyiqIQ9yyvj9vqukSKf2A2l3vd3tcnU9FefzFCScndOuyWil3w98rG618FEsz-t-moEYeI=rw"
                        name="LG"
                        desc="Tháng LG quà mê ly" />
                </Link>
                <Link to="/listLaptop">
                    <ProductItemAdsHorizontal
                        url="https://lh3.googleusercontent.com/w9mrW6_W7yVglkXPNlhRTXvOzl02Fazc1425qJBzrD2oxQ9Zk0Qwi7pOLjUr9ws8YUB5EC9ooNi8XXD94hc=rw"
                        name="Lenovo"
                        desc="Laptop Chơi Game Thực Thụ" />
                </Link>
            </div>
        </div>
    )
}

export default OutstandBrand
