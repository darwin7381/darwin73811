// if(typeof require !== 'undefined') XLSX = require('xlsx');
// var workbook = XLSX.readFile('raw_data/收入統計(單表).xlsx');

var filename = 'raw_data/收入統計(單表).csv'


var fs = require('fs'); 
var parse = require('csv-parse');
var iconv = require('iconv-lite')


readfile(filename)

function readfile(filename){
        // read file
        var raw = fs.readFileSync(filename);
        // console.log(raw)

        // decoding
        var input = iconv.decode(raw, "big5");
        // prepend header
        // input = 'Symbol,Date,Time,Price,Volume\n' + input; //加表頭

        // parse csv
        var signals = parse(input, { columns: true }); //raw-->input-->signals


        for (var i in signals){
        	console.log(signals[i])
        }
}

// console.log(workbook)