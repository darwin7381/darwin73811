var fs = require('fs');
var records = JSON.parse(fs.readFileSync('data/records.json', 'utf8'));

console.log(records[35])