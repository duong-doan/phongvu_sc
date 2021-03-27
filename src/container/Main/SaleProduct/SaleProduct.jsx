import React, { useState } from 'react';

import './SaleProduct.scss'
import SaleProductItem from './SaleProductItem/SaleProductItem';
import ButtonSwitch from './ButtonSwitch/ButtonSwitch';
import WrapCard from './WrapCard/WrapCard';


const SaleProduct = () => {
    const [clickedBtn, setClickedBtn] = useState(true)

    const handleClickedBtn = (value) => {
        setClickedBtn(value)
        console.log(value);
    }

    return (
        <div className="main__sale_product">
            <WrapCard isClickedBtn={clickedBtn}>
                <ButtonSwitch isClickedBtn={handleClickedBtn} />
                <SaleProductItem isClickedBtn />
            </WrapCard>
        </div>
    )
}

export default SaleProduct
