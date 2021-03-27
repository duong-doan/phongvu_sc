import React from 'react'
import Address from './Address/Address'

import './Footer.scss'
import Info from './Info/Info'
import Payment from './Payment/Payment'

const Footer = () => {
    return (
        <div className="footer">
            <Info />
            <Payment />
            <Address />
        </div>
    )
}

export default Footer
