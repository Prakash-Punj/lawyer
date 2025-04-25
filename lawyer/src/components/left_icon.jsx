
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';


const LeftSideIcons = () => {
  return (
    <div className="left-fixed-icons">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
      <FaWhatsapp />
      </a>
      <a href="tel:+1234567890" className="phone-icon">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default LeftSideIcons;
