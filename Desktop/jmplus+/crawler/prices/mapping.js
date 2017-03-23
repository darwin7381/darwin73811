var fs = require('fs')

var brand = 'brand'
var type = 'type'
var note = 'note'

var filepath = 'json/prices.json';


var writepath_brand = 'json/'+brand+'_mapping.json';
var writepath_type = 'json/'+type+'_mapping.json';
var writepath_note = 'json/'+note+'_mapping.json';




var jsonfile = fs.readFileSync(filepath, 'utf8')

var brand_list = []
var type_list = []
var note_list = []



records = JSON.parse(jsonfile)
// console.log(jsonfile)

brand_list.push("品牌")
for (var i in records){
	var item = records[i]["品牌"]

	if(brand_list.indexOf(item) == -1){
		brand_list.push(item)
	}
}

type_list.push("型態")
for (var i in records){
	var item = records[i]["型態"]

	if(type_list.indexOf(item) == -1){
		type_list.push(item)
	}
}
note_list.push("註1")
for (var i in records){
	var item = records[i]["註1"]

	if(note_list.indexOf(item) == -1){
		note_list.push(item)
	}
}

console.log(brand_list)
console.log(brand_list.length)



fs.writeFileSync(writepath_brand,JSON.stringify(brand_list))
fs.writeFileSync(writepath_type,JSON.stringify(type_list))
fs.writeFileSync(writepath_note,JSON.stringify(note_list))