const express = require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser =require('body-parser');
const Validator=require('validator');
const isEmpty =require('lodash/isEmpty');
const nodemailer=require('nodemailer');

mongoose.connect('mongodb://localhost/searswebsite', { useMongoClient: true });
let db = mongoose.connection;

//DB Check
db.once('open', ()=>{
  console.log('Connected to MongoDB');
})
db.on('error', (err) =>{
  console.log(err);
});

var transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: 'searsindiaofficial@gmail.com',
    pass: 'IndiaSears@2017'
  }
})
app.use(bodyParser.json());

let User = require('./models/user')
let Executive = require('./models/executive')
let Blog = require('./models/blog')

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
  if(Validator.isEmpty(data.lastname+'')){
    errors.lastname = 'This field is required';
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
  }else{
    console.log(req.body)
    let body="<table border=1 cellspacing=0 cellpadding=0 style='width:450px'><tr><td>Name</td><td>"+req.body.firstname +' '+req.body.lastname +"</td></tr><td>E-mail</td><td>"+req.body.email+"</td><tr></tr><td>Message</td><td>"+req.body.message+"</td><tr></tr></table>"
    const mailOptions= {
      from: 'Sears India<searsindiaofficial@gmail.com>',
      to: 'Vinayak M<Vinayak.Malavade@searshc.com>', //'SHI.Communications<SHI.Communications@searshc.com>'
      subject: 'Message from SHI Corporate Website',
      html: body
    }
    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
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

app.get('/api/blog', (req, res) => {
  Blog.find({}, function(err, blogs){
    console.log(blogs)
    res.json(blogs);
  })
  // res.json(req.query.name);
});

app.listen(3001,() => {
  console.log('Server started on port 3001');
});
