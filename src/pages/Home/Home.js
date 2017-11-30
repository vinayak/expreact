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
        <div className="text-center text-uppercase"><h3>About <span className="wlast">sears holdings india</span></h3></div>
        <div class="row">
            <div class="col-md-4">
            <div style={divStyle} className="outer">
              <img src={Independence} alt="Inside Sears Holdings India" width="349" height="210" sizes="(max-width: 349px) 100vw, 349px"/>
              <p className="wp-caption-text">Inside Sears Holdings India</p>
            </div>
            </div>
            <div class="col-md-8">
                <p>Sears IT and Management Services (India) Pvt. Limited, also known as Sears Holdings India (SHI) provides corporate IT services to Sears Holdings Corporation (SHI, NASDAQ:SHLD) and its family of companies including Sears Roebuck and Co. and Kmart Corporation.</p>
                <p>Established in December 2009, SHI works as an extended arm to the core Information Technology (IT) team of SHC. SHI develops and maintains business critical systems used by SHC and its subsidiaries. Our objective is to assist SHC in making the Sears retail experience simpler and smoother so that members can shop anytime, anywhere.</p>
                <p>At Sears we offer a wide array of services to advice, transform and optimize business and technology processes while minimizing risk. Our services include systems integration, delivery, machine learning, business analytics, product support, e-commerce, m-commerce and managed services supporting various applications for the Sears retail chain.</p>
                <p>SHI has its headquarters in Pune, and two more development centers in Bengaluru and Hyderabad. SHI also provides business process management services to SHC.</p>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>sears holdings india <span className="wlast">stands for</span></h3></div>
        <div class="row">
            <div class="col-md-4">
              <div style={divStyle} className="outer">
                <img src={Innovation} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text">Innovation</p>
              </div>
            </div>
            <div class="col-md-4">
              <div style={divStyle} className="outer">
                <img src={Transparency} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text">Transparency</p>
              </div>
            </div>
            <div class="col-md-4">
              <div style={divStyle} className="outer">
                <img src={Empowerment} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text">Empowerment</p>
              </div>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>About<span className="wlast"> sears holdings Corporation </span></h3></div>

      </div>
    /*  <div className="Home">
        <h1>{this.state.message}</h1>
      </div>*/
    );
  }
}

export default Home;
