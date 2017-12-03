import React, { Component } from 'react';
import classnames from 'classnames';

class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      message:'',
      errors: {}
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({errors:{}})
    fetch('api/contact', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(this.state)
    }).then((data)=>{
      return data.json()
    }).then((data)=>{
      this.setState({errors: data})
      // console.log(data)
    })
    // fetch.post('api/contact', {data: this.state})
    // console.log(this.state)
  }
  render() {
    const {errors} = this.state;
    // console.log(errors)
    return(
      <form onSubmit={this.onSubmit}>
        <div className="text-center text-uppercase"></div>
          <div className="row">
            <div className={classnames("form-group col-md-6", {'has-error':errors.firstname})}>
              <input
                value={this.state.firstname}
                onChange={this.onChange}
                type="text"
                name="firstname"
                className="form-control"
                placeholder="First Name"/>
                {errors.firstname && <span className="help-block">{errors.firstname}</span>}
            </div>
            <div className={classnames("form-group col-md-6", {'has-error':errors.lastname})}>
              <input
                value={this.state.lastname}
                onChange={this.onChange}
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Last Name"/>
                {errors.lastname && <span className="help-block">{errors.lastname}</span>}
            </div>
          </div>
          <div className={classnames("form-group", {'has-error':errors.email})}>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email" />
              {errors.email && <span className="help-block">{errors.email}</span>}
          </div>
          <div className={classnames("form-group", {'has-error':errors.message})}>
            <textarea
              value={this.state.message}
              onChange={this.onChange}
              type="text"
              name="message"
              className="form-control"
              placeholder="Your message" />
              {errors.message && <span className="help-block">{errors.message}</span>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary"> Submit</button>
          </div>
      </form>
    )
  }
}

export default ContactForm;
