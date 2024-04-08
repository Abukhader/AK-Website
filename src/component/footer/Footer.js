import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div>
        <div class="footer-content">
    <p class="text-center">© 2024 AK Technology. All rights reserved.</p>
    <div class="social-icons">
      <a href="رابط صفحة الفيسبوك" target="_blank" className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="رابط صفحة انستجرام" target="_blank" className='iicon' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    </div>
    </div>
    </footer>
  )
}
