var fs = require('fs')
// var watch = require('watch')
var data_func = require('./database.js')
var ram_data = JSON.parse(fs.readFileSync('data.json'));

// watch.createMonitor('../database/', function(monitor) {
//     // add event listener
//     monitor.on("created", ram_data);
//     monitor.on("changed", ram_data);
//     module.exports = monitor;
// })
for (key in ram_data){
	var id = key
	var date = ram_data[key].date
	var price = ram_data[key].price
	var name = ram_data[key].name
	var item_model = ram_data[key].model
	data_func.writeRecordData(id,date,price,name,item_model)
}


// for (var key in ram_data){
//   var id = ram_data[key].id
//   var date = ram_data[key].日期
//   var price = ram_data[key].金額
//   var name = ram_data[key].品名
//   var item_model = ram_data[key].型號
//   data_func.writeRecordData(id,date,price,name,item_model)
// }



// for (var key in ram_data){
//   var id = key
//   var date = ram_data[key].日期
//   var price = ram_data[key].金額
//   var name = ram_data[key].品名
//   var item_model = ram_data[key].型號
//   data_func.writeRecordData(id,date,price,name,item_model)
// }
