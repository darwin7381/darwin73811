module.exports = {
		get_date : function(startDate,endDate){
			year = []
			year[0] = startDate.toString().slice(0,4)
			year[1] = endDate.toString().slice(0,4)

			month = []
			month[0] = startDate.toString().slice(4,6)
			month[1] = endDate.toString().slice(4,6)

			date = []
			duration = {}


			if (year[0] != year[1]){
				starYear()
				duraYear()
				endYear()
			}else{
				inYear()
			}

			function inYear(){
				mon = parseInt(month[1]) + 1
				for (var i = year[0];i<=year[0];i++){
					// console.log(i)
					for (var j = month[0];j<mon;j++){
						var m = j.toString()
						if (m.length == 1){
							m = "0"+m
					}
					date.push(i.toString()+m);
					// console.log(year[i])
					// console.log(m)
					}
				}
			}


			function starYear(){
				for (var i = year[0];i<=year[0];i++){
					// console.log(i)
					for (var j = month[0];j<13;j++){
						var m = j.toString()
						if (m.length == 1){
							m = "0"+m
					}
					date.push(i.toString()+m);
					// console.log(year[i])
					// console.log(m)
					}
				}
			}

			function duraYear(){
				y = parseInt(year[0]) +1 
				for (var i = y;i < year[1]; i++){
					for (var j = 1;j<13;j++){
						var m = j.toString()
						if (m.length == 1){
							m = "0"+m
						}
						date.push(i.toString()+m);
						// console.log(year[i])
						// console.log(m)
					}
				}
			}

			function endYear(){
				mon = parseInt(month[1]) + 1
				for (var i = year[1]; i <= year[1]; i++){
					for (var j = 1;j<mon;j++){
						var m = j.toString()
						if (m.length == 1){
							m = "0"+m
						}
						date.push(i.toString()+m);
						// console.log(year[i])
						// console.log(m)
					}
				}
			}
			// return date
		}
}
