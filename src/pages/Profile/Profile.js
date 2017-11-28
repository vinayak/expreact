import React, { Component } from 'react';

class Profile extends Component {
  render() {
    console.log(this.props.match.params)
    return (
        <h1>Profile</h1>
    );
  }
}

export default Profile;
