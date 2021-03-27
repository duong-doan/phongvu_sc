import React from 'react'
import './BannerFullWidth.scss'

const BannerFullWidth = (props) => {
    return (
        <div className="banner_full_width">
            <img src={props.url} alt="" />
        </div>
    )
}

export default BannerFullWidth
