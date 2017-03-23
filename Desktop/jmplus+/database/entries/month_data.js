var fs = require('fs');
var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')
var results = JSON.parse(fs.readFileSync('./results.json'));


var cash_flow = []
var cash_list = []
var cash_avg = []

var revenue_flow = []
var rf_list = []
var rf_avg = []

var expense_flow = []
var ef_list = []
var ef_avg = []


var rf_date = []
var ef_date = []
var cash_date = []


var cash_received = []
var cash_received_list = []
var cash_received_avg = []
var cf_received = []
var cf_received_list = []
var cf_received_avg = []
var cash_expense = []
var cash_expense_list = []
var cash_expense_avg = []
var inventory_expense = []
var inventory_expense_list = []
var inventory_expense_avg = []
var loan_expense = []
var loan_expense_list = []
var loan_expense_avg = []




startDate = dash.data_start_date
endDate = dash.data_end_date

duration.get_date(startDate,endDate)

for (var j in date){
	//TODO read right json file
	var records = JSON.parse(fs.readFileSync('json/'+date[j]+'.json', 'utf8'));
	// var records = JSON.parse(fs.readFileSync('select/'+date+'.json', 'utf8'));
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

	cash_date.push(date[j])
	cash_list.push(itemsum[0]+itemsum[1]+itemsum[2]+itemsum[3]+itemsum[4]-itemsum[5]-itemsum[6]-itemsum[7]
		// -itemsum[8]
		)

	rf_date.push(date[j])
	rf_list.push(itemsum[0])

	ef_date.push(date[j])
	ef_list.push(itemsum[7]+itemsum[5]+itemsum[6])

	count_item()

	console.log("date",date[j])
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
}


var len = Math.floor(cash_list.length/12)
var m_avg_cash = []
for (var i = 0; i < len; i++){
	var j = i*12
	var cash = 0

	for (var k = 0; k < 12; k++){
		cash += parseInt(rf_list[j+k])

	}
	m_avg_cash[i] = cash
}

cash_avg = m_avg_cash


var len = Math.floor(rf_list.length/12)
var m_avg_re = []
for (var i = 0; i < len; i++){
	var j = i*12
	var cash = 0

	for (var k = 0; k < 12; k++){
		cash += parseInt(rf_list[j+k])

	}
	m_avg_re[i] = cash
}

rf_avg = m_avg_re

var len = Math.floor(ef_list.length/12)
var m_avg_exp = []
for (var i = 0; i < len; i++){
	var j = i*12
	var cash = 0

	for (var k = 0; k < 12; k++){
		cash += parseInt(ef_list[j+k])

	}
	m_avg_exp[i] = cash
}
ef_avg = m_avg_exp



function count_item(){
	cash_received_list.push(itemsum[0])
	cf_received_list.push(itemsum[1]+itemsum[2]+itemsum[3])
	cash_expense_list.push(itemsum[4])
	inventory_expense_list.push(itemsum[5]+itemsum[6]+itemsum[7])
	loan_expense_list.push(itemsum[8])
}
results["cash_received"] = []
results["cash_received"] = cash_received_list
results["cf_received"] = []
results["cf_received"] = cf_received_list
results["cash_expense"] = []
results["cash_expense"] = cash_expense_list
results["inventory_expense"] = []
results["inventory_expense"] = inventory_expense_list
results["loan_expense"] = []
results["loan_expense"] = loan_expense_list



results["cash_flow"] = []
results["revenue_flow"] = []
results["expense_flow"] = []


results["cash_flow_date"] = cash_date
results["cash_flow_avg"] = cash_avg
results["cash_flow"] = cash_list

results["revenue_flow_date"] = rf_date
results["revenue_flow_avg"] = rf_avg
results["revenue_flow"] = rf_list

results["expense_flow_date"] = ef_date
results["expense_flow_avg"] = ef_avg
results["expense_flow"] = ef_list


fs.writeFileSync("results.json",JSON.stringify(results))

console.log(results["cash_received"])
