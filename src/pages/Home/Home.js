import React, { Component } from 'react';
import './Home.css';

import Innovation from './images/1-3.jpg';
import Empowerment from './images/2-3.jpg';
import Transparency from './images/3-2.jpg';
import Hoffman from './images/Hoffman-Estates.png';
import Independence from './images/Independence-Day-Lights-and-Tricolors.jpg';
import MemberFirst from './images/Member-First-Low-Res-1024x726.jpg';

const divStyle = {
  maxWidth: '359px'
};

class Home extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }
  componentDidMount() {
    fetch('/api')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }
  render() {
    return (
      <div className="Home">
        <div style={divStyle} className="outer">
          <img src={Independence} alt="Inside Sears Holdings India" width="349" height="210" sizes="(max-width: 349px) 100vw, 349px"/>
          <p className="wp-caption-text">Inside Sears Holdings India</p>
        </div>
      </div>
    /*  <div className="Home">
        <h1>{this.state.message}</h1>
      </div>*/
    );
  }
}

export default Home;
