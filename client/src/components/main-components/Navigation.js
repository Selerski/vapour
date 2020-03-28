import React from 'react';
import { useDispatch } from 'react-redux';

import '../../styles/main-styles/navigation.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, socket }) => {
  const dispatch = useDispatch();

  const logout = () => {
    fetch(`https://whispering-ocean-93586.herokuapp.com/users/logout`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'GET'
    })
      .then(res => (res.status < 400 ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .then(data => {
        dispatch({ type: 'LOGOUT' });
      });
  };
  return (
    <div className="navigation__container ">
      <Link to="/" className="navigation__logo">
        <img src={logo} alt="logo" />
        <p>Vapour</p>
      </Link>
      <div className="navigation__links-container">
        <Link
          className="navigation__player-list-toggle button"
          onClick={e => {}}
          to="/profile"
        >
          <div>Profile</div>
        </Link>
        <Link
          className="navigation__player-list-toggle button"
          onClick={e => {}}
          to="/messages"
        >
          <div>PLAYERS & CHAT</div>
        </Link>
        <Link
          className="navigation__player-list-toggle button"
          onClick={e => {}}
          to="/forum"
        >
          <div>Forum</div>
        </Link>
        <Link
          className="navigation__logout button"
          onClick={e => {
            logout();
            socket.emit('logout-user', currentUser._id);
            socket.emit('disconnect');
          }}
          to="/"
        >
          SIGN OUT
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
