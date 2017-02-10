var tableToCsv = require('node-table-to-csv');
var fs = require('fs');
var path = require('path')
var cheerio = require('cheerio')


// var records = JSON.parse(fs.readFileSync('data/records.json'));

var content = fs.readFileSync('source_code/test.html', 'utf8');

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


fs.writeFileSync("data/list.json",JSON.stringify(list));

// if (records["item"] == undefined) {
//     records["item"] = {
//         // Key: "",
//         // Date: "",
//         // Account: "",
//         // Item: "",
//         // Cash: "",
//         // Note1: "",
//         // Note2: "",
//         // Edit: ""
//     };
// }

// records["item"][list[0]] = 5
// console.log(records)




// for (i=0;i<list.length;i++){
// 	num = Math.floor(i/8)*8

// 	key = list[num].toString()

// 	y = i%8
	
// 	records[key[i]] = {}
// 	records[key[i]][list[y]] = list[i].toString()
	
// }



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
	// console.log(record)

	
	obj.push(record)
	// records.push({"cat":30});
	// console.log(list[i%8])
	}
// console.log(obj)

// for (i=0;i<list.length/8;i++){
// 	records["item"+i] = records["item"+i][list[0]]
// }

// 	records["item"+y] = {}
// 	records["item"+y][list[i%8]] = 5
// 	console.log(y)
// }

name = path.basename('records.json')
console.log(name)

fs.writeFileSync("data/records.json",JSON.stringify(obj));

// console.log(list)

csv = tableToCsv(content);
 
// console.log(csv);s
// list.replace(/\r\n|\n/g,"");

for (var i in list){

	var slice = '"'+list[i%8]+'":'+'"'+list[i]

	fs.appendFileSync('data/account.json',slice)
	fs.appendFileSync('data/account.json','",')
	// fs.appendFileSync('data/account.json','"')
	// fs.appendFileSync('data/account.json',list[i%8])	
	// fs.appendFileSync('data/account.json','":')

	// fs.appendFileSync('data/account.json','"')
	// fs.appendFileSync('data/account.json',list[i])
	// fs.appendFileSync('data/account.json','",')
	// fs.appendFileSync('data/account.json',"\n")
}





// for (var i = 0 ; i < list.length/8; i++){
//   fs.appendFileSync('data/account.json','"')
//   fs.appendFileSync('data/account.json',list[i*8])
//   fs.appendFileSync('data/account.json','",')
//   fs.appendFileSync('data/account.json',"\n")
//   fs.appendFileSync('data/account.json',"\n")

// }

// fs.writeFile('data/account.json',content)
// fs.appendFile('data/account.json',list[1])
