import React, { Component } from 'react';
import Social from './Social'

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
    let executive= this.state.message
    let links=executive.links
    // console.log(executive.name)
    // console.log(executive.links)
    if(links === undefined){links=[]}
    return (
      <div className="container">
        <div className="col-md-3">
        <img src={process.env.PUBLIC_URL + '/images/'+executive.name + '.jpg'}  width="200" height="200" alt="Rakesh Chawla" />
        </div>
        <div className="col-md-9">
           <div dangerouslySetInnerHTML={{__html: executive.content}}/>
           <div>
             {links.map((link)=>{
               return <Social link={link} key={link.id}/>
             })}
           </div>
        </div>

      </div>
    );
  }
}

export default Profile;
