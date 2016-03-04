var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express()

app.patch ('/', function(req,res){
  res.send('Welcome Home')
})

app.delete('/about', function(req,res){
  res.send('About Page')
})

app.post('/contact', function(req,res){
  res.send("Contact page here.")
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
