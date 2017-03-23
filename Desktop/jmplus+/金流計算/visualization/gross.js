var fs = require('fs')
var raw = JSON.parse(fs.readFileSync('./raw_data.json'))
var dash = JSON.parse(fs.readFileSync('./dashboard.json'));
var duration = require('./date.js')
var gross_data = {}

startDate = dash.start_date
endDate = dash.end_date

duration.get_date(startDate,endDate)
var mon_list = date
var jm_revenue = raw.jm_revenue_list
var jm_profit = raw.jm_profit_list
var ss_revenue = raw.ss_revenue_list
var ss_profit = raw.ss_profit_list
var yl_revenue = raw.yl_revenue_list
var yl_profit = raw.yl_profit_list

gross_data.jm_revenue = jm_revenue
gross_data.jm_profit = jm_profit
gross_data.ss_revenue = ss_revenue
gross_data.ss_profit = ss_profit
gross_data.yl_revenue = yl_revenue
gross_data.yl_profit = yl_profit


gross_data.gross_date = mon_list


fs.writeFileSync('gross.json', JSON.stringify(gross_data));
