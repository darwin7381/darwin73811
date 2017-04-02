var tableToCsv = require('node-table-to-csv');
var fs = require('fs');
var path = require('path')
var cheerio = require('cheerio')
var filename = 'check'
var filepath = 'check/'+filename+'.html';
var writepath = 'check/'+filename+'.json';
var csvpath = 'check/'+filename+'.csv'
var txtpath = 'check/'+filename+'.txt'

var content = fs.readFileSync(filepath, 'utf8');

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

for (i=0;i<list.length/11;i++){
	num = i*11

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
	records[i][list[8]] = list[num+8].toString()
	records[i][list[9]] = list[num+9].toString()
	records[i][list[10]] = list[num+10].toString()

	var record = records[i]
	obj.push(record)

// Key,銀行,帳號,票號/對方帳號,金額,到期日/支付日,領款人,已支付,備註,備註2,編輯
	// for txt list
	t_list[i] = []
	t_list[i].push(list[num].toString())
	t_list[i].push(list[num+1].toString())
	t_list[i].push(list[num+2].toString())
	t_list[i].push(list[num+3].toString())
	t_list[i].push(list[num+4].toString().replace(/,/g, ''))
	t_list[i].push(list[num+5].toString().replace(/-/g,"/"))
	t_list[i].push(list[num+6].toString())
	t_list[i].push(list[num+7].toString())
	t_list[i].push(list[num+8].toString())
	t_list[i].push(list[num+9].toString())
	t_list[i].push(list[num+10].toString())
}
// Write json files
fs.writeFileSync(writepath,JSON.stringify(obj));

// Write txt files
datas["data"] = t_list
fs.writeFileSync(txtpath,JSON.stringify(datas));

var csv_list = []
fs.writeFileSync(csvpath, csv_list)

for (var i in obj){
	// console.log(obj[i])
	fs.writeFileSync(csvpath, t_list[i].join(',') + '\n', { flag: 'a' });
}