import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './ContactForm'

import facebook from './images/facebook.png'
import google from './images/google-plus.png'
import linkedin from './images/linkedin.png'
import pinterest from './images/pinterest.png'
import twitter from './images/twitter.png'

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="title">
          <h3 className="text-uppercase text-center">Contact <span className="wlast">Us</span><span className="small-line"></span></h3>
        </div>
        <div>
          <div className="col-md-4">
            <iframe width="400" height="400" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL4xGd8XDwjsRubyz8GzZPZU&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Pune" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <iframe width="400" height="400" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJr-_vF6kTrjsR2M6rZTd5b3w&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Bangalore" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <iframe width="400" height="400" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRa3U-cKTyzsR5jvEBLqRCRA&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Hyderabad" allowFullScreen></iframe>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="container">
          <div className="col-md-6 text-center" >
            <h3 className="text-uppercase text-center vspacing">Connect With Us</h3>
            <p className="text-center">To talk to us or give feedback, please send your messages to</p>
            <p className="text-center"><b>SHI [dot] Communications [at] searshc [dot] com</b></p>
            <p className="text-center">Please send your resumes to</p>
            <p className="text-center"><b>SHIRecruitment [at] searshc [dot] com</b></p>
            <a href="https://twitter.com/SearsIndia" target="_blank"><img className="spacing" src={twitter} alt="twitter" /></a>
            <a href="https://www.facebook.com/searsindiaofficial" target="_blank"><img className="spacing" src={facebook} alt="facebook" /></a>
            <a href="https://www.pinterest.com/searsindia" target="_blank"><img className="spacing" src={pinterest} alt="pinterest" /></a>
            <a href="https://www.linkedin.com/company/searsindia" target="_blank"><img className="spacing" src={linkedin} alt="linkedin" /></a>
            <a href="https://plus.google.com/117032605762076802971" target="_blank"><img className="spacing" src={google} alt="google" /></a>
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase text-center vspacing">Write to Us</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
