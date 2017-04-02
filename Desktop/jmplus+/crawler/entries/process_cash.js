var fs = require('fs');
var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')



var startDate = dash.select_start_date
var endDate = dash.select_end_date
var datadate = startDate + "-" + endDate

var item_list = []
var results = {}
// var s_list = []
var statistics = {}



duration.get_date(startDate,endDate)


// All day
var obj = JSON.parse(fs.readFileSync('select/'+datadate+'.json', 'utf8'));

function item_filter(list,item){
	if (list.indexOf(item) != -1) {
	}else{
		list.push(item)
		console.log(item)
	}
}

list = []
// Write csv files records
fs.writeFileSync('emergency/'+datadate+'.csv', list);
for (var i in obj){
	var list = [obj[i].Key,obj[i].日期,obj[i].科目,obj[i].項目,obj[i].金額,obj[i].備註1,obj[i].備註2,obj[i].編輯]
	item_filter(item_list,list[3])
	fs.writeFileSync('emergency/'+datadate+'.csv', list.join(',') + '\n', { flag: 'a' });
}


// Write item category csv
fs.writeFileSync('emergency/項目.csv', item_list);

// console.log(item_list)

function get_zero(){
	statistics = {}
	for (var i in item_list){
		statistics[item_list[i]] = 0
	}
}
function get_count(){
	results[date[i]] = statistics
	console.log("===============",date[i])
}

// Single month datas
for (var i in date){
	var csv_list = []
	var path = 'emergency/'+date[i]+'.json'
	var csvpath = 'emergency/'+date[i]+'.csv'
	var records = JSON.parse(fs.readFileSync('json/'+date[i]+'.json', 'utf8'));
	get_zero()
	for (var y in records){
		var record = records[y]
		// console.log(record.項目)
		var index = item_list.indexOf(record.項目)
		statistics[item_list[index]] += parseInt(record.金額)
	}
	get_count()
	fs.writeFileSync(path,JSON.stringify(statistics))

	fs.writeFileSync(csvpath, item_list.join(',') + '\n');
	for (key in statistics){
		csv_list.push(statistics[key])
	}
	fs.writeFileSync(csvpath, csv_list.join(',') , { flag: 'a' });	
	
}


// console.log(results)



for (var key in results){
	console.log(results[key])
}






