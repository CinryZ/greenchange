/*
* @Author: admin
* @Date:   2018-08-22 16:15:12
* @Last Modified by:   admin
* @Last Modified time: 2018-08-22 16:23:04
*/
var express = require('express');
var app=express();

app.use(express.static('../greenchange'));

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  // console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})