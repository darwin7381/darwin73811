var fs = require('fs')

// var target = fs.readFileSync('./json/201303.json', 'utf8');


// console.log(target[15])
var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')

startDate = dash.data_start_date
endDate = dash.data_end_date

duration.get_date(startDate,endDate)

for (var i in date){
	filename = date[i]
	var filepath = 'json/'+filename+'.json';
	var writepath = 'txt/'+filename+'.txt';
	var jsonfile = fs.readFileSync(filepath, 'utf8')
	var datas = {}
	var list = []
	records = JSON.parse(jsonfile)

	for (var j = 0; j < records.length; j++){
		var tlis = []
		item = records[j]
		for (var i in item){
			tlis.push(item[i])
		}
		list.push(tlis)
	}


	datas["data"] = list

	fs.writeFileSync(writepath,JSON.stringify(datas))
}

