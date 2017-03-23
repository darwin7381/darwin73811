var fs = require('fs')
var data_func = require('./database.js')
var get_duration = require('./entries/date.js')
var dash = require('./entries/dash.json')
var startDate = dash.data_start_date
var endDate = dash.data_end_date

get_duration.get_date(startDate,endDate)


// for all data
for (var i in date){
	storing_entr(date[i])
}


function storing_entr(data_date){
	var entr_data = JSON.parse(fs.readFileSync('entries_data/'+data_date+'.json'));
	for (var key in entr_data){
	  var id = entr_data[key].Key
	  var date = entr_data[key].日期
	  var account = entr_data[key].科目
	  var item = entr_data[key].項目
	  var price = entr_data[key].金額
	  var note1 = entr_data[key].備註1
	  var note2 = entr_data[key].備註2
	  data_func.writeEntries(id,date,account,item,price,note1,note2)
	  // console.log(id,date,account,item,price,note1,note2)
	}
}