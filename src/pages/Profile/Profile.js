import React, { Component } from 'react';

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
    return (
      <div>
        <h1>Profile</h1>
        <img src={process.env.PUBLIC_URL + '/images/'+this.state.message + '.jpg'} />
      </div>
    );
  }
}

export default Profile;
