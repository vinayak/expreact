import React, { Component } from 'react';
import Img from './rakash_chawla.jpg';

class Profile extends Component {
  constructor() {
    super();
    this.state = { message: '', image:'' };
  }
  componentDidMount() {
    fetch('/api/executive?name='+this.props.match.params.user)
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    const img = require('./rakash_chawla.jpg')
    // const img = require('./' + this.state.message+'.jpg')
    return (
      <div>
        <h1>Profile</h1>
        {this.state.message}
        <img src={img}/>
      </div>
    );
  }
}

export default Profile;
