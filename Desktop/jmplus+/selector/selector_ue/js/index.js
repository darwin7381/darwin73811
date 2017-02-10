var className = $('.c104').attr('class');


// define image link
function picker(i){
  return $("#earphone").attr("src","/Users/LuoJieLiang/Desktop/jmplus+/selector/ue/c"+i+".png")
}


// image function
function click(x){
  console.log(x)
  return $("#earphone").attr("src","/Users/LuoJieLiang/Desktop/jmplus+/selector/ue/"+x+".png")
}



function leclick(x){
  var l = x
  $(".leftphone").css("display","block")
  console.log(l)
  return $("#leftphone").attr("src","/Users/LuoJieLiang/Desktop/jmplus+/selector/ue/"+l+".png")
}

function riclick(x){
  var l = x
  $(".rightphone").css("display","block")
  console.log(l)
  return $("#rightphone").attr("src","/Users/LuoJieLiang/Desktop/jmplus+/selector/ue/"+l+".png")
}



//Left Right Button
$(".left").click(function(){
  $(this).toggleClass("sideon")
});
$(".right").click(function(){
  $(this).toggleClass("sideon")
});


// Left function
function Left(x){
  if(varL = 1) {
    leclick(x)
    return
  console.log($(this).attr('class'))
  }
}

//Right function
function Right(x){
  if(varL = 1) {
    riclick(x)
    return
  console.log($(this).attr('class'))
  }
}


// var i = 0
// $(".cusname").click(function(){
//   i + 1;
//   if ( i%2 == 0 ) {
//   $(".options").css("display","inline-block")}
// });


// kinds of custom
$("#cusname1").click(function () {
  $(".color").toggleClass("optionshow");
  $(".side").toggleClass("sideshow")
});

$("#cusname2").click(function () {
  $(".wood").toggleClass("optionshow");
});
$("#cusname3").click(function () {
  $(".specialM").toggleClass("optionshow");
});
$("#cusname4").click(function () {
  $(".pattern").toggleClass("optionshow");
});
// $(".cusname").toggle(function(){
//   $("body").css("background-color","green");},
//   function(){
//   $("body").css("background-color","yellow");}
// );


// sides control
var varL = 1
var varR = 1
$(".left").click(function(){
  if(varL==0){
    varL += 1
  } else{
    varL = 0
  }
  console.log(varL)
})
$(".right").click(function(){
  if(varR==0){
    varR += 1
  } else{
    varR = 0
  }
  console.log(varR)
})

//Left Image
function LeControl(x){
  if(varL == 1){
  console.log("Happiness!")
  leclick(x)
}}

//Right Image
function RiControl(x){
  if(varR == 1){
  riclick(x)
}}

$(".color").click(function(){
  $(".brandname").text($(this).text())
});

$(".c1").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
                      
$(".c2").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c3").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c4").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c5").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c6").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c7").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c8").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c18").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c20").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c23").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c36").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c51").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c58").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c66").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c70").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c75").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c84").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c85").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});
$(".c104").click(function(){
  var y = $(this).attr('class')
  LeControl(y)
  RiControl(y)
});






$(".wood").click(function(){
  $(".brandname").text($(this).text())
  $(".leftphone").css("display","")
  $(".rightphone").css("display","")
})

$(".w57").click(function(){
 click($(this).attr('class'))
});
$(".w58").click(function(){
 click($(this).attr('class'))
});
$(".w59").click(function(){
 click($(this).attr('class'))
});
$(".w60").click(function(){
 click($(this).attr('class'))
});
$(".w61").click(function(){
 click($(this).attr('class'))
});



$(".specialM").click(function(){
  $(".brandname").text($(this).text())
  $(".leftphone").css("display","")
  $(".rightphone").css("display","")
})
$(".s65").click(function(){
  click($(this).attr('class'))
})
$(".s62").click(function(){
  click($(this).attr('class'))
})
$(".s64").click(function(){
  click($(this).attr('class'))
})
$(".s66").click(function(){
  click($(this).attr('class'))
})
$(".s67").click(function(){
  click($(this).attr('class'))
})


$(".pattern").click(function(){
  $(".brandname").text($(this).text())
  $(".leftphone").css("display","")
  $(".rightphone").css("display","")
})

$(".p68").click(function(){
  click($(this).attr('class'))
});
$(".p69").click(function(){
  click($(this).attr('class'))
});
$(".p70").click(function(){
  click($(this).attr('class'))
});
$(".p72").click(function(){
  click($(this).attr('class'))
});
$(".p73").click(function(){
  click($(this).attr('class'))
});
$(".p74").click(function(){
  click($(this).attr('class'))
});
$(".p75").click(function(){
  click($(this).attr('class'))
});
$(".p76").click(function(){
  click($(this).attr('class'))
});
$(".p77").click(function(){
  click($(this).attr('class'))
});
$(".p78").click(function(){
  click($(this).attr('class'))
});







$(".robin").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","420px");
  $(".brandname").text($(this).text())
  button_audio.play();
})