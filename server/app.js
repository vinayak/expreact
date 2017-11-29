const express = require('express');
const app=express();
const mongoose= require('mongoose');


mongoose.connect('mongodb://localhost/searswebsite', { useMongoClient: true });
let db = mongoose.connection;

//DB Check
db.once('open', ()=>{
  console.log('Connected to MongoDB');
})
db.on('error', (err) =>{
  console.log(err);
});

let User = require('./models/user')
let Executive = require('./models/executive')

app.get('/api', (req, res) => {
  res.json('Welcome To React');
});

app.get('/api/executive', (req, res) => {
  Executive.findOne({name:req.query.name }, function(err, executives){
    console.log(executives)
    res.json(executives);
  })
  // res.json(req.query.name);
});

app.listen(3001,() => {
  console.log('Server started on port 3001');
});
