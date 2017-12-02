import React, { Component } from 'react';

class MediaCenter extends Component {
  constructor() {
    super();
    this.state = { message: {}};
  }
  // componentDidMount() {
  //   return fetch('/api/blog')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }
  render() {
    return <h1>Media Center</h1>
  }
}

export default MediaCenter;
