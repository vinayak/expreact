import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return(
      <div dangerouslySetInnerHTML={{__html: this.props.blog.title+this.props.blog.content}}/>
    )
  }
}

export default Blog;
