import React from 'react';
import '../ServicesPage/Services.css'; // Создадим новый CSS-файл
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <img
        src="/1.png"
        alt="Background"
        className="services-background-image"
      />
      <div className="services-overlay"></div>

      {/* Хедер (такой же как на других страницах) */}
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

      {/* Основное содержимое страницы */}
      <main className="services-main-content">
        <div className="services-content-wrapper">
          <h1 className="services-title">Послуги</h1>
          
          <ul className="services-list">
            <li>Лісопільне та стругальне виробництво</li>
            <li>Виробництво фанери, дерев'яних плит і панелей, штону</li>
            <li>Виробництво столярних виробів та дерев'яної тари</li>
            <li>Оптова торгівля деревиною, будівельними матеріалами, технічним обладнанням</li>
            <li>Вантажні перевезення автомобільним транспортом</li>
            <li>Оренда нерухомості, вантажного транспорту, машин та обладнання</li>
            <li>Ремонт і технічне обслуговування промислових машин</li>
            <li>Торгівля сільськогосподарською технікою та іншими промисловими товарами</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;