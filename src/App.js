import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">About SHI</Link></li>
                <li><Link to="/management">Management Team</Link></li>
                <li><a href="/Notfound">Media Center</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Latest Jobs</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main role="main" class="container">
          {this.props.children}
        </main>
        <footer class="footer">
          <div class="container">
            <span class="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
