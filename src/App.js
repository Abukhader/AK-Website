import React from 'react';
import Navbar from './component/navbar/navbar';
import PagesContainer from './component/PagesContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PagesContainer />} />
        </Routes>
        <footer>
  <div class="footer-content">
    <p class="text-center">© 2024 AK Technology. All rights reserved.</p>
    <div class="social-icons">
      <a href="رابط صفحة الفيسبوك" target="_blank" className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="رابط صفحة انستجرام" target="_blank" className='iicon' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
  </div>
</footer>


      </div>
    </Router>
  );
}

export default App;
