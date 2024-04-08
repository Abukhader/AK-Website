// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import mobileAppImage from '../../assets/mobile_app_image.jpg'
import webAppImage from '../../assets/web_app_image.jpg';
import accountingSoftwareImage from '../../assets/accounting_software_image.jpg';
import uiuxImage from '../../assets/uiux_image.jpg'; 
import cvImage from '../../assets/cv_image.jpg'; // استيراد الصورة لتصميم السيرة الذاتية CV
import homeVideo from '../../assets/home.mp4'; 
import './Card.css'

const Home = () => {
  return (
    <div id='home'>
        <video className="cover-video" autoPlay muted loop>
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div class='arabic-text'> 
   <h1 id="first-heading">مرحبًا بك في</h1>
   <br/>
   <h1><span className="purple-text">AK Technology</span></h1>
   <h1 id='third-heading'>موطن الحلول الإبداعية لأفكارك</h1>
   
</div>
<p className='arabic-text-p'></p>
      

      <div className="services">
      <div className='exp-services'>Explore our services</div>
        <div className="service-card">
          <img src={mobileAppImage} alt="Mobile Application" />
          <h2 className='servicse'>Mobile <br/> Applications</h2>
          <p>استكشف عالم التطبيقات المتنقلة والتفاعلية مع خدماتنا المخصصة لتطوير تطبيقات الجوال. نقدم لك تجربة مبتكرة وسلسة، تجمع بين التصميم الجذاب والأداء المتميز، لتلبية احتياجاتك وتحقيق رؤيتك من خلال تطبيقات متميزة على منصات الهواتف الذكية.





</p>
          <Link to="/mobile-application">Learn More</Link>
        </div>
        <div className="service-card">
          <img src={webAppImage} alt="Web Application" />
          <h2 className='servicse'>Web<br/> Applications</h2>
          <p>استكشف عالم التطبيقات الويب المبتكرة والمتنوعة مع خدماتنا المخصصة لتطوير التطبيقات عبر الويب. نقدم لك تجربة مميزة ومتجاوبة على مختلف الأجهزة، تتميز بالسرعة والأمان والفعالية. سواء كنت بحاجة إلى تطبيق شخصي، تجاري، أو مؤسسي، فإننا هنا لتحقيق رؤيتك وتوفير الحلول التقنية الملائمة لنجاحك على الإنترنت.





</p>
          <Link to="/web-application">Learn More</Link>
        </div>
        <div className="service-card">
          <img src={accountingSoftwareImage} alt="Accounting Software" />
          <h2 className='servicse'>Accounting Software</h2>
          <p>اكتشف حلول المحاسبة الذكية والمتطورة التي تلبي احتياجات شركتك أو مؤسستك بفعالية ودقة. تقدم خدماتنا في مجال برامج المحاسبة تطبيقات متكاملة تتيح لك إدارة الحسابات والمالية والضرائب بكفاءة عالية. سواء كنت تبحث عن حلول للشركات الصغيرة أو الشركات الكبيرة، فإننا نوفر لك الأدوات اللازمة لتبسيط العمليات وتحسين الأداء المالي لمؤسستك.





</p>
          <Link to="/accounting-software">Learn More</Link>
        </div>
        <div className="service-card">
          <img src={uiuxImage} alt="UI/UX Design" />
          <h2 className='servicse'>UI/UX <br/>Design</h2>
          <p>استمتع بتجربة تصميم مميزة ومتفردة مع خدماتنا في تصميم واجهات المستخدم (UI) وتجربة المستخدم (UX). نقدم لك تصميمات مبتكرة وجذابة تهدف إلى تعزيز تفاعل المستخدم مع منتجاتك وخدماتك على الإنترنت. سواء كنت بحاجة إلى تصميم تطبيقات الجوال، مواقع الويب، أو منصات التجارة الإلكترونية، فإننا نضمن لك تجربة مستخدم فريدة ومريحة تلبي تطلعاتك وتحقق أهدافك.





</p>
          <Link to="/ui-ux-design">Learn More</Link>
        </div>
        <div className="service-card">
          <img src={cvImage} alt="CV Design" />
          <h2 className='servicse'>CV <br/> Design</h2>
          <p>في قسم تصميم السيرة الذاتية، نقدم لك خدمات تصميم مبتكرة واحترافية لتحسين وتجميل السيرة الذاتية الخاصة بك. سواء كنت تبحث عن سيرة ذاتية تعكس شخصيتك ومهاراتك بشكل مبدع، أو تحتاج إلى تصميم متميز يبرز خبراتك وإنجازاتك بشكل ملفت للنظر، فإننا هنا لنلبي احتياجاتك. استفد من خبرتنا في تصميم السير الذاتية لتحصل على ملف شخصي يبرز أفضل ما لديك بأسلوب مبتكر وجذاب.





</p>
          <Link to="/cv-design">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
window.onload = function() {
    setTimeout(function() {
      var firstHeading = document.getElementById('first-heading');
      var thirdHeading = document.getElementById('third-heading');
      if (firstHeading) {
        firstHeading.style.color = '#ccc'; // تغيير لون النص إلى الأسود
      }
      if(thirdHeading) {
        thirdHeading.style.color = '#ccc';
      }
    }, 18000); // بعد 15 ثانية
  };

export default Home;
