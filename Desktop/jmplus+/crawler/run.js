var transist = require('./trans.js')
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAUNeYf0ZBRbDdIfk-0X89vCpB1UA9wcRk",
  authDomain: "jm-plus.firebaseapp.com",
  databaseURL: "https://jm-plus.firebaseio.com",
  storageBucket: "jm-plus.appspot.com"
};
firebase.initializeApp(config);

function writeUserData(productId, date, price, name, model) {
  firebase.database().ref('sales records/' + productId).set({
    date: date,
    price: price,
    name: name,
    model : model
  });
}
writeUserData(123,234,333,444,"Bad Cat")

console.log("transformed")