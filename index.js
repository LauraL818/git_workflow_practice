var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

app.get('/contact', function(req,res){
  res.send("Contact page here.")
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
