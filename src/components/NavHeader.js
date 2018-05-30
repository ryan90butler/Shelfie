import React, { Component } from 'react';
import logo from '../logo.png';
import { Link, withRouter } from 'react-router-dom';

const NavHeader = (props)=> {
  return (
          <header className="Nav-header">
            <Link className='header-main-link' to='/'>
              <div className="nav-header-logo-cont">
                <img className="nav-header-logo" src={logo} alt="logo" />
              </div>
            </Link>
            <Link to={`/bins/${props.match.params.id[0]}`}>
            <div className='shelfHeader'><p className="shelf-text">Shelf {props.match.params.id[0].toUpperCase()}</p></div>
            </Link>
            {props.isBin ? <div className="divHeader"><span className='binTitle'>Bin {props.previous.match.params.id[1]}</span>
            </div>
                : null}

              {props.createToggle ? <div className='newBinTitle'><p className="newBinTitle-text">Add to Bin {props.match.params.id[1]}</p></div>
                : null}

          </header>

        );
}

export default withRouter(NavHeader);