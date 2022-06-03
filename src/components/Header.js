import React from 'react';
import logo from '../images/logo.png';
import logoBbc from '../images/logo-bbc.png';
import logoForbes from '../images/logo-forbes.png';
import logoBi from '../images/logo-bi.png';
import logoTc from '../images/logo-techcrunch.png';

export default function Header() {
  return (
      <header className="header">
        <img src={logo} alt="Nexter Logo" class="header__logo" />
        <h3 class="heading-3">Your own home:</h3>
        <h1 class="heading-1">The ultimate personal freedom</h1>
        <button class="btn header__btn">View our properties</button>

        <div class="header__seenon-text">As seen on</div>
        <div class="header__seenon-logos">
          <img src={logoBbc} alt="Seen on logo 1" />
          <img src={logoForbes} alt="Seen on logo 2" />
          <img src={logoBi} alt="Seen on logo 3" />
          <img src={logoTc} alt="Seen on logo 4" />
        </div>
      </header>
  );
}
