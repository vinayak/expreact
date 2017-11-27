import React, { Component } from 'react';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">About SHI</Link></li>
              <li><Link to="/management">Management Team</Link></li>
              <li><Link to="/media_center">Media Center</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/jobs">Latest Jobs</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
