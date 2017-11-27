import React, { Component } from 'react';
import './Home.css';

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
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Home;
