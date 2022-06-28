import React from 'react';
import Button from '../../../components/Button';
import Logo from '../logo/Logo';
import LogoText from '../logo/LogoText';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Logo />
            <LogoText />
          </div>
          <div className="header__buttons">
            <Button content="Users" />
            <Button content="Sing up" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
