var fs = require('fs'); 
var get_file = require('./make.js')
var folder = "POS_data"
var result_folder = "processed"
var item = [];
var title = [[""],
["銷售門市"],
["收銀機"],
["銷售日期"],
["銷售單號"],
["發票號碼"],
["銷售員"],
["消費者"],
["品項名稱"],
["定價"],
["售價"],
["數量"],
["小計"],
["折扣率"],
["折扣額"],
["原小計"]]
var file_list = get_file.getAllFilesFromFolder(folder)

var csv_list = get_file.csv_filter(file_list)

var write_name = []

for (var i in csv_list){
	var length = folder.length+1
	var item = csv_list[i].slice(0,-4)
	var name = item.slice(length)
	write_name.push(name)
}

for (var i in write_name){
	get_file.xls_2_json(folder,result_folder,write_name[i])
}

for (i in write_name){
	csv_convert(write_name[i])
	fs.writeFileSync(write_name[i]+'.csv',title.join(',') + '\n');
}


function csv_convert(name){
	var inpath = 'processed/json/'+name+'.json'
	var outpath = 'processed/csv/'+name+'.csv'
	var records = JSON.parse(fs.readFileSync(inpath))
	console.log(name,records.length)
	get_csv(outpath,records)
}
function get_csv(outpath,records){
	fs.writeFileSync(outpath,title.join(',') + '\n');
	for (var i in records){

		records[i]["品項名稱"] = rename(records[i]["品項名稱"])
		var record = records[i]
		var list = [record[""],record["銷售門市"],record["收銀機"],record["銷售日期"],record["銷售單號"],record["發票號碼"],record["銷售員"],record["消費者"],record["品項名稱"],record["定價"],record["售價"],record["數量"],record["小計"],record["折扣率"],record["折扣額"],record["原小計"]]
		// console.log(records[i]["品項名稱"])
		for (var k in list){
			list[k] = list[k].toString().replace(",","")
		}
		// console.log(list)
		fs.writeFileSync(outpath, list.join(',') + '\n', { flag: 'a' });
	}
}

function rename(item_name){
	index = item_name.lastIndexOf("-")
	item_name = item_name.slice(0,index)
	return item_name
}

