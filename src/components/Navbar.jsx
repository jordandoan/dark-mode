import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = ({ coinData, history }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <NavLink className="navTitle" exact to="/"><h1>Crypto Tracker</h1></NavLink>
      {coinData.map(coin => 
        <NavLink activeClassName="active" className="link" to={`/${coin.id}`}>{coin.name}</NavLink>
      )}
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
