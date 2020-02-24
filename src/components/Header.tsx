import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <nav className="nav-title deep-purple lighten-1">
    <div className="nav-wrapper">
      <Link to="/main" className="brand-logo">Список дел</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/main">Главная</Link></li>
        <li><Link to="/tasks">Выполненные задачи</Link></li>
        <li><Link to="/others">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
);