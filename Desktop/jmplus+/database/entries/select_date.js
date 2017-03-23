var fs = require('fs')

// var target = fs.readFileSync('./json/201303.json', 'utf8');


// console.log(target[15])

var dash = JSON.parse(fs.readFileSync('dash.json'));
var startDate = dash.select_start_date
var endDate = dash.select_end_date




var duration = require('./date.js')
duration.get_date(startDate,endDate)

var select_date = []

var std = date.indexOf(String(startDate))
var end = date.indexOf(String(endDate))
var writepath = 'select/'+date[std]+"-"+date[end]+'.txt';
var jwpath = 'select/'+date[std]+"-"+date[end]+'.json';
var datas = {}
var list = []
var jlist = []

for (var i = std; i <= end; i++){
	select_date.push(date[i])
}

for (var i in select_date){
	filename = select_date[i]
	var filepath = 'json/'+filename+'.json';
	var jsonfile = fs.readFileSync(filepath, 'utf8')

	records = JSON.parse(jsonfile)

	for (var j = 0; j < records.length; j++){
		var tlis = []
		item = records[j]
		for (var i in item){
			tlis.push(item[i])
		}
		list.push(tlis)
	}
}

for (var i in select_date){
	filename = select_date[i]
	var filepath = 'json/'+filename+'.json';
	var jsonfile = fs.readFileSync(filepath, 'utf8')


	records = JSON.parse(jsonfile)

	for(var j = 0; j < records.length; j++){
		record = records[j]
		jlist.push(record)
		// console.log(record)
	}
}

// console.log(jlist)

datas["data"] = list
fs.writeFileSync(writepath,JSON.stringify(datas))
fs.writeFileSync(jwpath,JSON.stringify(jlist))

