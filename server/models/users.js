let mongoose = require('mongoose');

let userSchema =mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});
let Article = module.exports  = mongoose.model('User', userSchema );
