import React from 'react'
import './Banner.scss'

import Carousel from 'react-bootstrap/Carousel'

const Banner = (props) => {
  return (
    <div className="main__banner">
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/fh-NipPTtdIofjtYkT8h5Bk-F1qJzmxuie5xx4t9VZKkAGFzk9__AZ4Gl5v85smTgBJm6cZ78ZBy4GOtbOJyUzQysk6qp-ww=w1920-rw"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/R-Qu4we4EDRNumhW14tRisnYH9ZLauUN-zhfr7FgsoxSRl9sk0CE98cCldrUbPV5jR4efHTvhjvjh4Fqal9a7LVF0AShymTf0Q=w1920-rw"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/9UNFrtmmqzhl2kQ9yoGWmWvMRCU822r6Ixa_A2z98Q1Ot5UuN0x49bh8ktWJ9wlIPMxl-4VCV8F5PA1kKF0CtknyrBrhWZo=w1920-rw"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/dE3XTUup8KVdpJYK7sSLH1MNk1DslyeqmU0d5Kq2cZWRXyUk3j1NgMq-z568-6wqWCt03QaA3wiDQM99JWWQR-FbaG0Q6ZBE=w1920-rw"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://lh3.googleusercontent.com/xS-Ey_-W5I4JaPc8oL9xJZhYtvAFdF_76KMHUVbW7Xf-jfaoxj420-6WZ_RiKVd10ZN3iZr4FV6UuWllJS6d-dXAdk6mjO0=w1920-rw"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {props.children}
    </div>
  )
}

export default Banner







