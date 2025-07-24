// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage/Main';
import AboutPage from './page/AboutPage/About';
import ServicesPage from './page/ServicesPage/Services';
import ContactsPage from './page/ContactPage/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
}

export default App;