var tableToCsv = require('node-table-to-csv');
var fs = require('fs');
var path = require('path')
var cheerio = require('cheerio')


var dash = JSON.parse(fs.readFileSync('entries/dash.json'));


startDate = dash.data_start_date
endDate = dash.data_end_date

var duration = require('./entries/date.js')

duration.get_date(startDate,endDate)

for (var i in date){
	filename = date[i]
	console.log(date[i],"transforming")
	var filepath = 'entries/source/'+filename+'.html';
	var writepath = 'entries/json/'+filename+'.json';
	var csvpath = 'entries/csv/'+filename+'.csv'
	var txtpath = 'entries/txt/'+filename+'.txt'


	// var records = JSON.parse(fs.readFileSync(filepath));

	var content = fs.readFileSync(filepath, 'utf8');
	// console.log(content)
	var request = require('request');

	var $ = cheerio.load(content)


	var list = [];
	$('table > tbody > tr > td').each(function(){

		var item = $(this).text().split('><')

		item[0] = item[0].replace(/\r\n|\n/g,"")
		item[0] = item[0].replace(/\s+/g, "");
		// console.log(item)

	    list.push(item);
	    // console.log(item)
	});

	records = {}
	obj = []
	datas = {}
	t_list = []

	for (i=0;i<list.length/8;i++){
		num = i*8

		//for json obj
		records[i] = {}
		records[i][list[0]] = list[num].toString()
		records[i][list[1]] = list[num+1].toString()
		records[i][list[2]] = list[num+2].toString()
		records[i][list[3]] = list[num+3].toString()
		records[i][list[4]] = list[num+4].toString()
		records[i][list[5]] = list[num+5].toString()
		records[i][list[6]] = list[num+6].toString()
		records[i][list[7]] = list[num+7].toString()

		var record = records[i]
		obj.push(record)

		// for txt list
		t_list[i] = []
		t_list[i].push(list[num].toString())
		t_list[i].push(list[num+1].toString())
		t_list[i].push(list[num+2].toString())
		t_list[i].push(list[num+3].toString())
		t_list[i].push(list[num+4].toString())
		t_list[i].push(list[num+5].toString())
		t_list[i].push(list[num+6].toString())
		t_list[i].push(list[num+7].toString())
	}
	// Write json files
	fs.writeFileSync(writepath,JSON.stringify(obj));

	// Write txt files
	datas["data"] = t_list
	fs.writeFileSync(txtpath,JSON.stringify(datas));

	// Write csv files
	var csv_list = ["Key","日期","科目","項目","金額","備註1","備註2","編輯"]
	fs.writeFileSync(csvpath, csv_list.join(',') + '\n');

	for (var i in obj){
		// console.log(obj[i])
		fs.writeFileSync(csvpath, list.join(',') + '\n', { flag: 'a' });
	}

}
