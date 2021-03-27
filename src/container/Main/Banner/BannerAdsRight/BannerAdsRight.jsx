import React from 'react';
import './BannerAdsRight.scss'

import ProductItemAds from '../../../../components/ProductItemAds/ProductItemAdsSquare/ProductItemAds';
import imgAds1 from '../../../../assets/images/product_item/square/main_product_item-ads-news.webp';
import imgAds2 from '../../../../assets/images/product_item/square/main_product_item-ads-buildPC.webp';

const BannerAdsRight = () => {
    return (
        <div className="product__item-wrapAds">
            <ProductItemAds url={imgAds1} />
            <ProductItemAds url={imgAds2} />
        </div>
    )
}

export default BannerAdsRight
