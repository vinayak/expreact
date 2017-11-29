import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="title">
          <h3 className="text-uppercase text-center">Contact <span className="wlast">Us</span></h3>
        </div>
        <div className="padbottom">
          <div className="col-md-4">
            <iframe width="400" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL4xGd8XDwjsRubyz8GzZPZU&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Pune" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <iframe width="400" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJr-_vF6kTrjsR2M6rZTd5b3w&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Bangalore" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <iframe width="400" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRa3U-cKTyzsR5jvEBLqRCRA&key=AIzaSyA8xOyZAIdcO_TbHial-hklF-tEuwbs0MU" title="Hyderabad" allowFullScreen></iframe>
          </div>
        </div>
        <div className="container">
          <div className="title">
            <h3 className="text-uppercase text-center">Connect With Us</h3>
          </div>
        </div>
        <div className="container">
          <div className="col-md-6 text-center" >
            <p>To talk to us or give feedback, please send your messages to</p>
            <p><b>SHI [dot] Communications [at] searshc [dot] com</b></p>
            <p>Please send your resumes to</p>
            <p><b>SHIRecruitment [at] searshc [dot] com</b></p>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
