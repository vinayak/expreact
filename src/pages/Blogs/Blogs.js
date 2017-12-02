import React, { Component } from 'react';
import Blog from './blog';

class Blogs extends Component {
  constructor() {
    super();
    this.state = { message: []};
  }
  componentDidMount() {
    return fetch('/api/blog')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }
  render() {
    return this.state.message.length > 0 ? (
      <div>
        <h1>Blogs</h1>
        {this.state.message.map((blog)=>{
          return <Blog blog={blog} key={blog.id}/>
        })}
      </div>
      ) : (<span>Loading</span>)
  }
}

export default Blogs;
