import React, { Component } from 'react';

class Social extends Component {
  render() {
    return(
      <a href={this.props.link.url} target="_blank"><img className="spacing" src={process.env.PUBLIC_URL + '/images/'+this.props.link.social + '.png'}  width="65" height="50" alt="" /></a>
    )
  }
}

export default Social;
