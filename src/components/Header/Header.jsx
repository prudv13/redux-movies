import React from 'react'
import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/user.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className='logo'>
        <img src={LogoImg} width={90} />
        <span>Redux Movies</span>
      </Link>
      <div className='user-image'>
        <img src={UserImg} alt='user' width={90} />
      </div>
    </div>
  )
}

export default Header;
