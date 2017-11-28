let mongoose = require('mongoose');

let executiveSchema =mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
let Executive = module.exports  = mongoose.model('User', executiveSchema );
