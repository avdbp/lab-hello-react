// Header.jsx
import React from 'react';
import logo from '../images/logo.png';
import hamburguesa from '../images/hamburguesa.png';

function Header() {
  return (
    <header className='App-header'>
      <section className='content1'>
        <div>
          <img className='logo' src={logo} alt="logo" />
        </div>
        <div className='hamburguesa'>
          <img className='logo' src={hamburguesa} alt="logo" />
        </div>
      </section>
      <section className='content2'>
        <h1>Say Hello to ReactJS</h1>
        <p>you learn how to use the most popular frontend library and become a super Ninja developer</p>
        <button className='btn-header'> Awesome!</button>
      </section>
    </header>
  );
}

export default Header;
