import React from 'react';
import './BannerAdsBottom.scss'

import ProductItemAdsHorizontal from '../../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'
import imgAds1 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-1.webp'
import imgAds2 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-2.webp'
import imgAds3 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-3.webp'
import imgAds4 from '../../../../assets/images/product_item/horizontal/main_product_item-adsHorizon-4.webp'
import { Link } from 'react-router-dom';

const BannerAdsBottom = () => {
    return (
        <div className="product__item-wrapAdsHorizontal">
            <Link to="/phoneProduct">
                <ProductItemAdsHorizontal url={imgAds1} />
            </Link>
            <Link to="/listLaptop">
                <ProductItemAdsHorizontal url={imgAds2} />
            </Link>
            <Link to="/productSaleLaptops">
                <ProductItemAdsHorizontal url={imgAds3} />
            </Link>
            <Link to="/accessories">
                <ProductItemAdsHorizontal url={imgAds4} />
            </Link>
        </div>
    )
}

export default BannerAdsBottom
