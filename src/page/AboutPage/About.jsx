import React from 'react';
import '../AboutPage/About.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
    <div className="about-page-container">
      <img
        src="/background.png"
        alt="Background"
        className="about-background-image"
      />
      <div className="about-overlay"></div>

        <header className="header">
        <div className="nav-links centered-header">
          <Link to="/about">Про нас</Link>
          <Link to="/services">Послуги</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/">Головна</Link>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="contact-info centered-header">
          <p>+ (380) 99 75 92 466</p>
        </div>
      </header>

      <main className="about-main-content">
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img 
              src="/2.png" // Ваше изображение
              alt="Деревообробка" 
              className="about-content-image"
            />
          </div>

          <div className="about-text-section">
            <h1 className="about-title">Про нас</h1>
            
            <p className="about-text-block">
              <strong>ТОВ «ВОДОН»</strong> — українська компанія, що спеціалізується на деревообробці 
              виробництві фахера, плит, сходящих виробів і дерев'яної тари.
            </p>
            
            <p className="about-text-block">
              Ми також надаємо послуги з оптової торгівлі деревиною, будівельними матеріалами 
              технікою, а також здійснюємо вантажні перевезення та оберту промислового обладнання.
            </p>
            
            <p className="about-text-block">
              Більш мета — забезпечення якісних рішень для будівництва, логістики та виробництва.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;