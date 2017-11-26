const express = require('express');
const app=express();
const mongoose= require('mongoose');


mongoose.connect('mongodb://localhost/sears', { useMongoClient: true });
let db = mongoose.connection;

//DB Check
db.once('open', ()=>{
  console.log('Connected to MongoDB');
})
db.on('error', (err) =>{
  console.log(err);
});

let vin={name: 'Vinayak Malavade'}
let User = require('./models/users')

app.get('/', (req, res) => {
  res.send(vin)
});

app.listen(3001,() => {
  console.log('Server started on port 3001');
});
