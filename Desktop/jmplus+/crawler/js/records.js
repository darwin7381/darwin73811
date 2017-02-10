var tableToCsv = require('node-table-to-csv');
var fs = require('fs');
var cheerio = require('cheerio')


var records = JSON.parse(fs.readFileSync('data/records.json'));

var content = fs.readFileSync('source_code/test.html', 'utf8');


// test = 
//     "<table>" +
//     "<tr> <th>r1c1</th> <td>r1c2</td> <td>r1c3</td> </tr>" +
//     "<tr> <th>r2c1</th> <td>r2c2</td> <td>r2c3</td> </tr>" +
//     "<tr> <th>r3c1</th> <td>r3c2</td> <td>r3c3</td> </tr>" +
//     "</table>";


var request = require('request');

// var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm';
// request(url, function(err, res, body){
//     console.log(body);
// });


var $ = cheerio.load(content)



// var record = [
// 	    "Key",
//         "Date",
//         "Account",
//         "Item",
//         "Cash",
//         "Note1",
//         "Note2",
//         "Edit"
// ]
// record["Key"] = "840131"
// console.log(record)





var list = [];
$('table > tbody > tr > td').each(function(){

	var item = $(this).text().split('><')

	item[0] = item[0].replace(/\r\n|\n/g,"")
	item[0] = item[0].replace(/\s+/g, "");
	// console.log(item)

    list.push(item);
});


fs.writeFileSync("data/list.json",JSON.stringify(list));






if (records["item"] == undefined) {
    records["item"] = {
        // Key: "",
        // Date: "",
        // Account: "",
        // Item: "",
        // Cash: "",
        // Note1: "",
        // Note2: "",
        // Edit: ""
    };
}

records["item"][list[0]] = 5
// console.log(records)


// for (y=0;y<list.length/8;y++){}


// for (i=0;i<list.length;i++){
// 	y = Math.floor(i/8)+1
// 	z = i%8

// 	records["item"+y] = {}
// 	records["item"+y][list[i]] = list[0].toString()

// 	// console.log(list[i%8])
// 	console.log(z)
// }

for (i=0;i<list.length/8;i++){
	num = i*8

	records["item"+i] = {}
	records["item"+i][list[0]] = list[num].toString()
	records["item"+i][list[1]] = list[num+1].toString()
	records["item"+i][list[2]] = list[num+2].toString()
	records["item"+i][list[3]] = list[num+3].toString()
	records["item"+i][list[4]] = list[num+4].toString()
	records["item"+i][list[5]] = list[num+5].toString()
	records["item"+i][list[6]] = list[num+6].toString()
	records["item"+i][list[7]] = list[num+7].toString()

	// console.log(list[i%8])
	}




// 	records["item"+y] = {}
// 	records["item"+y][list[i%8]] = 5
// 	console.log(y)
// }




fs.writeFileSync("data/records.json",JSON.stringify(records));



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
