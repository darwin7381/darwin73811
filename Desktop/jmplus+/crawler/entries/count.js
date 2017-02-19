var fs = require('fs');
var txt = require('./txt.js')

var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')
var results = {}
var titlename = ["1.現金收入","     票收","3.金流收入","     郵收","5.現金支出","     銀支","     卡支","8.貨款支出(票支)","9.貸款支出"]

var startDate = dash.select_start_date
var endDate = dash.select_end_date

var itemsum = txt.itemsum
var revenue = txt.revenue
var expense = txt.expense
var cash = txt.cash
var revenue_flow = txt.revenue_flow

// for (var i = 0; i < ){

// }
var datadate = startDate + "-" + endDate

results["duration"] = datadate

for (var i in titlename){
	results[titlename[i]] = itemsum[i]
}

results["revenue"] = revenue
results["expense"] = expense

results["Total"] = cash
results["revenue_flow"] = revenue_flow

console.log("-----------")
console.log(startDate,"-",endDate)
// console.log(cash_received)
console.log(cash)

fs.writeFileSync("results.json",JSON.stringify(results))