import React from 'react';
import '../ContactPage/Contact.css';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
    return (
    <div className="contacts-page-container">
      <img
        src="/background.png"
        alt="Background"
        className="contacts-background-image"
      />
      <div className="contacts-overlay"></div>

      <header className="header">
        <div className="nav-links centered-header">
          <Link to="/about">Про нас</Link>
          <Link to="/services">Послуги</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/">Головна</Link>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="BOДOH Логотип" />
        </div>
        <div className="contact-info centered-header">
          <p>+ (380) 99 75 92 466</p>
        </div>
      </header>

      <main className="contacts-main-content">
        <div className="contacts-content-wrapper">
          <h1 className="contacts-title">Контакти</h1>
          
          <p className="contacts-intro">
            Бажаєте обговорити ваш проект, купити готові вироби з деревини або поставити запитання?<br />
            Зв'яжіться з нами безпосередньо.
          </p>
          
          <div className="contacts-sections">
            <div className="contacts-section">
              <h2 className="contacts-subtitle">Адреса</h2>
              <div className="contacts-text">
                <p>м. Тростянець, Сум. обл.</p>
                <p>Вул. Благовіщенська, 38.</p>
                <p>42600</p>
              </div>
            </div>
            
            <div className="contacts-section">
              <h2 className="contacts-subtitle">Графік роботи</h2>
              <div className="contacts-text">
                <p>Пн.-Пт.: 8:00 - 17:00</p>
                <p>Сб.-Нд.: Вихідні</p>
              </div>
            </div>
            
            <div className="contacts-section">
              <h2 className="contacts-subtitle">Зв'яжіться з нами</h2>
              <div className="contacts-text">
                <p>+ (380) 99 75 92 466</p>
                <p>eigareno7206@ukr.net</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactsPage;