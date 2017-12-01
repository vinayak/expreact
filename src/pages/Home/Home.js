import React, { Component } from 'react';
import './Home.css';

import Innovation from './images/1-3.jpg';
import Empowerment from './images/2-3.jpg';
import Transparency from './images/3-2.jpg';
import Hoffman from './images/Hoffman-Estates.png';
import Independence from './images/Independence-Day-Lights-and-Tricolors.jpg';
import MemberFirst from './images/Member-First-Low-Res-1024x726.jpg';
import Slider1 from './images/Slider-Images-Template-copy-1.jpg';
import Slider2 from './images/Slider-Images-Template-copy-2.jpg';
import Slider3 from './images/Slider-Images-Template-copy-3.jpg';
import Slider4 from './images/Slider-Images-Template-copy-4.jpg';

class Home extends Component {

  componentDidMount() {
    const jsCode = `
      $('#myCarousel').carousel({
          interval: 1500,
          cycle: true
      });
    `;
    new Function(jsCode)();
  }
  render() {
    return (
      <div className="Home">
      <div className="container">
        <br />
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={Slider1} alt="Chania" width="1349" height="400" />
              <div className="carousel-caption">
                <h3>Chania</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
              </div>
            </div>
            <div className="item">
              <img src={Slider2} alt="Chania" width="1349" height="400"/>
              <div className="carousel-caption">
                <h3>Chania</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
              </div>
            </div>
            <div className="item">
              <img src={Slider3} alt="Flower" width="1349" height="400"/>
              <div className="carousel-caption">
                <h3>Flowers</h3>
                <p>Beautiful flowers in Kolymbari, Crete.</p>
              </div>
            </div>
            <div className="item">
              <img src={Slider4} alt="Flower" width="1349" height="400"/>
              <div className="carousel-caption">
                <h3>Flowers</h3>
                <p>Beautiful flowers in Kolymbari, Crete.</p>
              </div>
            </div>
          </div>
        </div>
        </div>




        <div className="text-center text-uppercase"><h3>About <span className="wlast">sears holdings india</span></h3></div>
        <div className="row">
            <div className="col-md-4">
            <div  className="outer">
              <img src={Independence} alt="Inside Sears Holdings India" width="349" height="210" sizes="(max-width: 349px) 100vw, 349px"/>
              <p className="wp-caption-text padtop">Inside Sears Holdings India</p>
            </div>
            </div>
            <div className="col-md-8">
                <p>Sears IT and Management Services (India) Pvt. Limited, also known as Sears Holdings India (SHI) provides corporate IT services to Sears Holdings Corporation (SHI, NASDAQ:SHLD) and its family of companies including Sears Roebuck and Co. and Kmart Corporation.</p>
                <p>Established in December 2009, SHI works as an extended arm to the core Information Technology (IT) team of SHC. SHI develops and maintains business critical systems used by SHC and its subsidiaries. Our objective is to assist SHC in making the Sears retail experience simpler and smoother so that members can shop anytime, anywhere.</p>
                <p>At Sears we offer a wide array of services to advice, transform and optimize business and technology processes while minimizing risk. Our services include systems integration, delivery, machine learning, business analytics, product support, e-commerce, m-commerce and managed services supporting various applications for the Sears retail chain.</p>
                <p>SHI has its headquarters in Pune, and two more development centers in Bengaluru and Hyderabad. SHI also provides business process management services to SHC.</p>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>sears holdings india <span className="wlast">stands for</span></h3></div>
        <div className="row">
            <div className="col-md-4">
              <div  className="outer">
                <img src={Innovation} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text padtop">Innovation</p>
              </div>
            </div>
            <div className="col-md-4">
              <div  className="outer">
                <img src={Transparency} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text padtop">Transparency</p>
              </div>
            </div>
            <div className="col-md-4">
              <div  className="outer">
                <img src={Empowerment} alt="Inside Sears Holdings India" width="260" height="260" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text padtop">Empowerment</p>
              </div>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>About<span className="wlast"> sears holdings Corporation </span></h3></div>
        <div className="row">
            <div className="col-md-4">
              <div  className="outer">
                <img src={Hoffman} alt="Inside Sears Holdings India" width="349" height="210" sizes="(max-width: 349px) 100vw, 349px"/>
                <p className="wp-caption-text padtop">SHC at Hoffman Estates</p>
              </div>
            </div>
            <div className="col-md-8">
                <p><strong>Sears Holdings Corporation&nbsp;(NASDAQ: SHLD)&nbsp;</strong>is a leading integrated retailer focused on seamlessly connecting the digital and physical shopping experiences to serve our members – wherever, whenever and however they want to shop.&nbsp;Sears Holdings is home to&nbsp;<a href="http://www.shopyourway.com/"  rel="noreferrer noopener" target="_blank">Shop Your Way</a>®, a social shopping platform offering members rewards for shopping at Sears and Kmart as well as with other retail partners across categories important to them. The company operates through its subsidiaries, including&nbsp;<a href="http://www.sears.com/" rel="noreferrer noopener" target="_blank">Sears</a>, Roebuck and Co. and&nbsp;<a href="http://www.kmart.com/" rel="noreferrer noopener" target="_blank">Kmart</a>&nbsp;Corporation, with full-line and specialty retail stores across&nbsp;the United States.</p>
                <p><strong>About Sears:</strong></p>
                <p><strong>Sears, Roebuck and Co.</strong>, a wholly owned subsidiary of Sears Holdings Corporation (NASDAQ: SHLD), is a leading integrated retailer providing merchandise and related services and is part of Shop Your Way, a social shopping experience where members have the ability to earn points and receive benefits across a wide variety of physical and digital formats through&nbsp;<strong>shopyourway.com</strong>. We&nbsp;offer a&nbsp;wide range of home merchandise, apparel and automotive products and services through Sears-branded and affiliated full-line and specialty retail stores in the United States. We&nbsp;also offers a variety of merchandise and services through sears.com and specialty catalogs. Sears owns leading proprietary brands including&nbsp;<strong>Kenmore, Craftsman, and DieHard,&nbsp;</strong>which are&nbsp;among the most trusted and preferred brands in the U.S. The company is the nation’s largest provider of home services, with more than 14 million service and installation calls made annually.</p>
                <p><strong>About Kmart:</strong></p>
                <p>Kmart, a wholly owned subsidiary of Sears Holdings Corporation (NASDAQ:&nbsp;SHLD), is a mass merchandising company and part of Shop Your Way®, a social shopping experience where members have the ability to earn points and receive benefits across a wide variety of physical and digital formats through&nbsp;<a href="http://www.shopyourway.com/" rel="noreferrer noopener" target="_blank">shopyourway.com</a>. Kmart offers customers quality products through a portfolio of exclusive brands that include&nbsp;Adam Levine, Nicki Minaj, Jaclyn Smith,&nbsp;Joe Boxer, Route 66 and Smart Sense.</p>
                <p>For more information visit the company’s website at&nbsp;<a href="http://www.kmart.com/" rel="noreferrer noopener" target="_blank">www.kmart.com</a>&nbsp;| Facebook:&nbsp;<a href="http://www.facebook.com/kmart" rel="noreferrer noopener" target="_blank">www.facebook.com/kmart</a></p>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>Delve into the history of a <span className="wlast"> century-old gaint </span></h3></div>
        <div className="row">
            <div className="col-md-12">
              <p>For the first time, Sears has opened the doors to its vast archival collection and invited the public to peek inside. More than 100 years of history now available online.</p>
              <p>Sears has a rich, long history to tell dating back to 1886 when Richard Sears sold the first batch of watches. The milestones, introductions and stories fill volumes. However, we’ve boiled the&nbsp;history down to a short narrative and event timeline for you: Sears’&nbsp;<a href="http://searsarchives.com/history/index.htm" rel="noreferrer noopener" target="_blank">narrative history</a>&nbsp;tells the story of the founding of Sears and the&nbsp;<a href="http://searsarchives.com/history/chronologies/modern/milestones.htm" rel="noreferrer noopener" target="_blank">chronology</a>&nbsp;is an up-to-date primer of our&nbsp;milestones and events. Both sections span from 1886 to today.</p>
            </div>
        </div>
        <div className="text-center text-uppercase"><h3>We swear by <span className="wlast"> one mission, four key results and seven cultural beliefs </span></h3></div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 ">
            <div className="outer">
              <img src={MemberFirst} alt="Member First" width="560" height="400" sizes="(max-width: 349px) 100vw, 349px"/>
              <p className="wp-caption-text padtop">Member First</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
