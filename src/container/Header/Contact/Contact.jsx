import React from 'react';
import './Contact.scss'

const Contact = (props) => {
  return (
    <div className="header__contact">
      <ul>
        <li >
          <i className="far fa-building"></i>
            Hệ thống Showroom
            </li>
        <li >
          <i className="fas fa-headphones"></i>
            Tư vấn mua hàng: <span>1800 6867</span>
        </li>
        <li >
          <i className="fas fa-headphones"></i>
            CSKH: <span>1800 6865</span>
        </li>
        <li >
          <i className="fas fa-tv"></i>
            Tin công nghệ
          </li>
        <li >
          <i className="fas fa-tools"></i>
            Xây dựng cấu hình
          </li>
      </ul>
    </div>
  );
}

export default Contact;