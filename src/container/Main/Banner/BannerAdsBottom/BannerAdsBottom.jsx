import React from 'react';
import './BannerAdsBottom.scss'

import ProductItemAdsHorizontal from '../../../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal'
import { Link } from 'react-router-dom';

const BannerAdsBottom = () => {
    return (
        <div className="product__item-wrapAdsHorizontal">
            <Link to="/phoneProduct">
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/kILb8yDPjsbdEtL3Df1C6xZuxsY7mzRlF3lhpwYUykdDBFo5OkfZBvTF9eqFBBECH4KA74LupOploWYtGmoYT4pOmU_Zoe6p=w308-rw'} />
            </Link>
            <Link to="/listLaptop">
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/IO9LdiZLI-5Iq6zlWBKJuAGGYlp6PkfxGcvfoWBZJmK0xZDC_1KyGjxy9p-aafU3pSUe6haPb7PFUcA6enRnjXj_oa2k0xwC=w308-rw'} />
            </Link>
            <Link to="/productSaleLaptops">
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/SV_i9L0Em9BRWbjhLrNd8nqBXtgxRZM8LUBSwEsO1wYwtzjOBrG_OZ2mId6oaQwVcUgYiR0ix_jUObI20CpPSgCJNobBMC0=w308-rw'} />
            </Link>
            <Link to="/accessories">
                <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/abgsyxtbVm26N2qW8abh6i-yMjCzDPVFFZs8FaXaQCWEJubBq3vyx-9g4pgeAiF4L1X9kFBWyGXBqt7f_SFWkcMOj4LLpascKQ=w308-rw'} />
            </Link>
        </div>
    )
}

export default BannerAdsBottom
