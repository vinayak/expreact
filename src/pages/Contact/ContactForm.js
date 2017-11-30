import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state={
      firstname: '',
      email: ''
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <div className="text-center text-uppercase"><h4>Write to Us</h4></div>
          <div className="form-group">
            <input
              value={this.state.firstname}
              onChange={this.onChange}
              type="text"
              name="firstname"
              className="form-control"
              placeholder="Name"/>
          </div>
          <div className="form-group">
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea
              value={this.state.message}
              onChange={this.onChange}
              type="text"
              name="message"
              className="form-control"
              placeholder="Your message" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary"> Submit</button>
          </div>
      </form>
    )
  }
}

export default ContactForm;
