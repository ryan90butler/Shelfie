import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class MainPage extends Component {
  constructor() {
    super();

    this.state = {
        shelf: [],
    };
}

  render() {
    return (
      <div className="main-App-container">
        <header className="mainPage-header">
          <div className="header-content">
            <img className="logo-cont" src={logo} alt="logo"/><h1>SHELFIE</h1>
          </div>
        </header>
        <div className="shelf-container">
          <Link className="shelf-list-link" to='bins/a'><div className="Shelf-list"><span className="shelf-list-text">Shelf A</span></div></Link>
          <Link className="shelf-list-link" to='bins/b'><div className="Shelf-list"><span className="shelf-list-text">Shelf B</span></div></Link>
          <Link className="shelf-list-link" to='bins/c'><div className="Shelf-list"><span className="shelf-list-text">Shelf C</span></div></Link>
          <Link className="shelf-list-link" to='bins/d'><div className="Shelf-list"><span className="shelf-list-text">Shelf D</span></div></Link>
        </div>
    </div>
    );
  }
}

export default MainPage;