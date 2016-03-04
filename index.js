var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express()

app.post('/', function(req,res){
  res.send('Welcome Home')
})

app.get('/about', function(req,res){
  res.send('About Page')
})

app.get('/contact', function(req,res){
  res.send("Contact page here.")
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
