module.exports = {
  getAllFilesFromFolder : function(dir) {
    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFilesFromFolder(file))
        } else results.push(file);

    });
    return results;
  },
  csv_filter : function(files) {
    var random_list = []
    for (var i in files){
        var item = files[i].slice(-3).toString()
        if (item=='xls'){
                random_list.push(files[i])
        }
    }
    return random_list
   },
   xls_2_json : function(sources,outputs,filename){
        var node_xj = require("xls-to-json");
        node_xj({
          input: sources+"/"+filename+".xls",  // input xls 
          output: outputs+"/json/"+filename+".json", // output json 
           // sheet: "sheet1"  // specific sheetname 
          }, function(err, result) {
            if(err) {
               console.error(err);
          } else {
               console.log(filename,"success!")
          }
        });
   }
};




// var file_list = getAllFilesFromFolder("POS_data")


