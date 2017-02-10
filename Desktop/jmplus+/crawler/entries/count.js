var fs = require('fs');
var txt = require('./txt.js')

var dash = JSON.parse(fs.readFileSync('./dash.json'));
var duration = require('./date.js')

startDate = dash.select_start_date
endDate = dash.select_end_date



revenue = txt.revenue
cash = txt.cash

console.log("-----------")

console.log(startDate,"-",endDate)
// console.log(cash_received)
console.log(cash)