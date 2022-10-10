import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './frends/Frends';

const setActive = navData => navData.isActive ? s.active : s.item;


const Navbar = (props) => {

  let friends = props.friends.map((f) => <Friends name={f.name} key = {f.id} img={f.img} />);
  return (
    <div className={s.nav}>
      <nav className={s.nav}>
        <div>
          <NavLink to="/profile/24139" className={setActive}> Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="dialogs" className={setActive}> Massages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="users" className={setActive}> Users</NavLink>
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
      <h3>Top friends</h3>
      <div className={s.fr}>
        {friends}
      </div>
    </div>
  )
}


export default Navbar;