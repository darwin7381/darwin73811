var tableToCsv = require('node-table-to-csv');
var fs = require('fs');
var path = require('path')
var cheerio = require('cheerio')


var dash = JSON.parse(fs.readFileSync('entries/dash.json'));

startDate = dash.data_start_date
endDate = dash.data_end_date

var duration = require('./date.js')

duration.get_date()
console.log(date)

for (var i in date){
	filename = date[i]
	
	var filepath = 'entries/source/'+filename+'.html';
	var writepath = 'entries/json/'+filename+'.json';


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
	for (i=0;i<list.length/8;i++){
		num = i*8

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
		// records.push({"cat":30});
		// console.log(list[i%8])
		}
	// console.log(obj)



	fs.writeFileSync(writepath,JSON.stringify(obj));

	// csv = tableToCsv(content);
	// console.log(csv);s
	// list.replace(/\r\n|\n/g,"");


}

// var name = path.basename('201304.js')
// filename = name.slice(0,-3)
