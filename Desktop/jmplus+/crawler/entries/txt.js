var fs = require('fs');

var revenue = []
var expense = []

var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')

var itemsum = []
var item_1 = []
var item_2 = []
var item_3 = []
var item_4 = []
var item_5 = []
var item_6 = []
var item_7 = []
var item_8 = []
var item_9 = []
var cash = 0

startDate = dash.select_start_date
endDate = dash.select_end_date



console.log(startDate,"-",endDate)
sfilename = startDate+"-"+endDate

duration.get_date(startDate,endDate)


//TODO read right json file
var records = JSON.parse(fs.readFileSync('select/'+startDate+'-'+endDate+'.json', 'utf8'));



for (var i in records) {
	var item = records[i].科目
	item = item.slice(0, 2);
	// console.log(item)
	item_num();
}


function item_num(){
	if (item == "1."){
		i = i
		item_1.push(records[i].金額)	
	}
	if (item == "2."){
		i = i
		item_2.push(records[i].金額)	
	}
	if (item == "3."){
		i = i
		item_3.push(records[i].金額)	
	}
	if (item == "4."){
		i = i
		item_4.push(records[i].金額)	
	}
	if (item == "5."){
		i = i
		item_5.push(records[i].金額)	
	}
	if (item == "6."){
		i = i
		item_6.push(records[i].金額)	
	}
	if (item == "7."){
		i = i
		item_7.push(records[i].金額)	
	}
	if (item == "8."){
		i = i
		item_8.push(records[i].金額)	
	}
	if (item == "9."){
		i = i
		item_9.push(records[i].金額)	
	}
}


// console.log("1.",item_1)
// console.log("2.",item_2)
// console.log("3.",item_3)
// console.log("4.",item_4)
// console.log("5.",item_5)
// console.log("6.",item_6)
// console.log("7.",item_7)
// console.log("8.",item_8)
// console.log("9.",item_9)



itemsum[0] = 0
for (var i in item_1){
	var num = parseInt(item_1[i])
	getNum()
	itemsum[0] += num 
}
itemsum[1] = 0
for (var i in item_2){
	var num = parseInt(item_2[i])
	getNum()
	itemsum[1] += num 
}
itemsum[2] = 0
for (var i in item_3){
	var num = parseInt(item_3[i])
	getNum()
	itemsum[2] += num 
}
itemsum[3] = 0
for (var i in item_4){
	var num = parseInt(item_4[i])
	getNum()
	itemsum[3] += num 
}
itemsum[4] = 0
for (var i in item_5){
// for (var i = 504 ; 
	var num = parseInt(item_5[i])
	getNum()
	itemsum[4] += num
}
itemsum[5] = 0
for (var i in item_6){
	var num = parseInt(item_6[i])
	getNum()
	itemsum[5] += num 
}
itemsum[6] = 0
for (var i in item_7){
	var num = parseInt(item_7[i])
	getNum()
	itemsum[6] += num 
}
itemsum[7] = 0
for (var i in item_8){
	var num = parseInt(item_8[i])
	getNum()
	itemsum[7] += num 
}
itemsum[8] = 0
for (var i in item_9){
	var num = parseInt(item_9[i])
	getNum()
	itemsum[8] += num 
}


function getNum() {
   num = num || 0
}

console.log("小計：")
console.log("1.現金收入:",itemsum[0])
console.log("     票收:",itemsum[1])
console.log("3.金流收入:",itemsum[2])
console.log("     郵收:",itemsum[3])
console.log("5.現金支出:",itemsum[4])
console.log("     銀支:",itemsum[5])
console.log("     卡支:",itemsum[6])
console.log("8.貨款支出:",itemsum[7],"票支")
console.log("9.貸款支出:",itemsum[8])

console.log(itemsum[4])

revenue = itemsum[0]+itemsum[1]+itemsum[2]+itemsum[3]
expense = itemsum[4]+itemsum[5]+itemsum[6]+itemsum[7]+itemsum[8]



cash += revenue


cash -= expense


console.log("Revenue：",revenue)
console.log("Expense：",expense)
console.log("Cashflow",cash)


// console.log(cash)
module.exports = {
	itemsum,
	revenue,
	expense,
	cash
}