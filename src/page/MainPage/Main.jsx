import React from 'react';
import '../MainPage/Main.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="homepage-container">
      <img
        src="/background.png"
        alt="Background"
        className="background-image"
      />
      <div className="overlay"></div>

      <header className="header">
        <div className="nav-links centered-header">
          <Link to="/about">Про нас</Link>
          <Link to="/services">Послуги</Link>
          <Link to="/contacts">Контакти</Link>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="contact-info centered-header">
          <p>+ (380) 99 75 92 466</p>
        </div>
      </header>

      <main className="main-content">
        <div className="center-block">
          <h1>
            <strong>Ми пропонуємо</strong> <br />
            <strong><span>вироби з дерева.</span></strong>
          </h1>
          <p className='txt1'>
            Компанія, заснована 5 січня 2021 року, що спеціалізується на
            неспеціалізованій оптовій торгівлі.
          </p>

          
        </div>
      </main>
    </div>
  );
}; 

export default MainPage;