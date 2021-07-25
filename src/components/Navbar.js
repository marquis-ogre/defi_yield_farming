import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
        className="nav-item text-nowrap d-none d-sm-none d-sm-block"
        href="https://github.com/Dexorzo"
        target="_blank"
        rel="noopener noreferrer"
        >
          <small className="text-light">
            <small id="account">{this.props.account}</small>
          </small>          
        </a>

          <li className="navbar navbar-light bg-light">
          <b>This Marquis Ogre demo project on BSC Testnet, There is no such token called DEX</b>
          </li>
        <ul className="navbar-nav px-3">
          <li className="navbar-brand col-sm-3 col-md-2 mr-0">
            <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt=""/>
          &nbsp; <b> Dex Yield Farming </b>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;