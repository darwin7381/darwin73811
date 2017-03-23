  // Set the configuration for your app
  // TODO: Replace with your project's config object
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


module.exports = {
  writeRecordData : function(productId,date,price,name,model){
    var sales_records = firebase.database().ref('sales_records/' + productId)
    sales_records.set({
      date: date,
      price: price,
      name: name,
      model : model
    });
    // sales_records.on('value', function(snapshot) {
    //   // updateStarCount(postElement, snapshot.val());
    //   console.log("update")
    // });
  },
  writeEntries : function(id,date,account,item,price,note1,note2){
    var ent_records = firebase.database().ref('ent_records/' + id)
    ent_records.set({
      日期: date,
      科目: account,
      項目 : item,
      金額 : price,
      備註1 : note1,
      備註2 : note2,

    })
  }

}
// Get a reference to the database service

var database = firebase.database();
// var name
// var sales = firebase.database().ref('/sales_records').once('value').then(function(snapshot) {
//   var name = snapshot.val();
//   console.log('name',name)
// });


// var salesRecordRef = firebase.database().ref('/sales_records/');
// salesRecordRef.on('value', function(snapshot) {
//   var obj = snapshot.val()
//   console.log('on',obj);
//   // sales_list.push(obj)
//   fs.writeFileSync('realtime.json',JSON.stringify(obj));
//   // fs.writeFileSync('realtime.json',JSON.stringify(sales_list));
// });

