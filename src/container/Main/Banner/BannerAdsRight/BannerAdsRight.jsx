import React from 'react';
import './BannerAdsRight.scss'

import ProductItemAds from '../../../../components/ProductItemAds/ProductItemAdsSquare/ProductItemAds';

const BannerAdsRight = () => {
    return (
        <div className="product__item-wrapAds">
            <ProductItemAds url={'https://lh3.googleusercontent.com/SCdi6Gn0dBoTKjb17iYKgC4OQKD9QJ7OaXMn5KQVG80zLaPzqSe2AxrcrZzxol6srCHNyNL1bEgCbp9ZWD4ocCwbnvciI567Rw=rw'} />
            <ProductItemAds url={'https://lh3.googleusercontent.com/1Cs0swwvL90zOPqUFpax5Gw4hsviopr8ZgzydWhqVOl-TgxGp9YURY6CHe-wqKElYUfmge2zevFdWYXubIgc_CRVEihBoUIz=rw'} />
        </div>
    )
}

export default BannerAdsRight
