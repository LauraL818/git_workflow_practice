var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express()

app.get('/', function(req,res){
  res.send('Welcome Home')
})

app.get('/about', function(req,res){
  res.send('About Page')
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
