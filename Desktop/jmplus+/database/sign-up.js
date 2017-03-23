var firebase = require('firebase');
var fs = require('fs')
var ram_data = JSON.parse(fs.readFileSync('data.json'));
var sales_list = []

var config = {
  apiKey: "AIzaSyAUNeYf0ZBRbDdIfk-0X89vCpB1UA9wcRk",
  authDomain: "jm-plus.firebaseapp.com",
  databaseURL: "https://jm-plus.firebaseio.com",
  storageBucket: "jm-plus.appspot.com"
};
firebase.initializeApp(config);