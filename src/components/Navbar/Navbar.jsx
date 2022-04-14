import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const setActive =navData=>navData.isActive? s.active: s.item;

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={setActive}> Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="dialogs" className={setActive}> Massages</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="news" className={setActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music" className={setActive}> Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings" className={setActive}> Settings</NavLink>
      </div>
    </nav>
  )
}


export default Navbar;