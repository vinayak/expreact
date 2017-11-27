import React, { Component } from 'react';
import Privacy from './assets/SHI-Privacy-Policy-2017.pdf'
import Terms from './assets/SHI-Social-Media-Terms-of-Use-2017.pdf'
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          Copyright &copy; 2017 Sears Holdings India | All Rights Reserved <br/>
          <Link to={Privacy} target='_blank'>Privacy Policy</Link> | <Link to={Terms} target='_blank'>Social Media Terms of Use</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
