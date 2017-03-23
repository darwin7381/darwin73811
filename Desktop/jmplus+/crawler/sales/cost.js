var fs = require('fs'); 
// var cost = JSON.parse(fs.readFileSync('cost.js'));
var records = JSON.parse(fs.readFileSync('./cost.json'))
// var cost


var cost = [];
for (var i in records){
	var obj = {}
	obj[records[i]["Name"]] = records[i]["cost"]
	console.log(obj)
	cost.push(obj)
	var list = [records[i]["Name"],records[i]["cost"]]
	fs.writeFileSync('cost.csv', list.join(',') + '\n', { flag: 'a' });
}





// fs.writeFileSync('sales/cost.csv', cost.join(',') + '\n', { flag: 'a' });