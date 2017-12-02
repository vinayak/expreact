let mongoose = require('mongoose');

let blogSchema =mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
let Blog = module.exports  = mongoose.model('Blog', blogSchema );
