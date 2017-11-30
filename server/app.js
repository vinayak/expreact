const express = require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser =require('body-parser');
const Validator=require('validator');
const isEmpty =require('lodash/isEmpty');

mongoose.connect('mongodb://localhost/searswebsite', { useMongoClient: true });
let db = mongoose.connection;

//DB Check
db.once('open', ()=>{
  console.log('Connected to MongoDB');
})
db.on('error', (err) =>{
  console.log(err);
});
app.use(bodyParser.json());

let User = require('./models/user')
let Executive = require('./models/executive')

app.get('/api', (req, res) => {
  res.json('Welcome To React');
});

function validateInput(data){
  let errors ={};

  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }
  if(Validator.isEmpty(data.email+'')){
    errors.email = 'This field is required';
  }
  if(Validator.isEmpty(data.firstname+'')){
    errors.firstname = 'This field is required';
  }
  if(Validator.isEmpty(data.message+'')){
    errors.message = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

app.post('/api/contact', (req, res) => {
  const {errors, isValid} = validateInput(req.body)
  if(!isValid){
    res.status(400).json(errors);
  }
  // console.log(req.body)
  // res.json('Welcome To React');
});


app.get('/api/executive', (req, res) => {
  Executive.findOne({name:req.query.name }, function(err, executives){
    // console.log(executives)
    res.json(executives);
  })
  // res.json(req.query.name);
});

app.listen(3001,() => {
  console.log('Server started on port 3001');
});
