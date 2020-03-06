//questions and answers
var quizQuestions = ["1+1=","2+2=","3+3=","4+4=","5+5="]
var answer0 = ["2","11","45","10"]
var answer1 = ["4","22","8","0"]
var answer2 = ["6","9","2","5"]
var answer3 = ["8","9","10","11"]
var answer4 = ["10","5","55","15"]

var questAmount = quizQuestions.length
var q

function quizStart(){
timeStart(100)
for (q = 0; q < questAmount;q++){

}
}


function timeStart(time){
setInterval(function(){
    time--

}, 1000);
}




// for(var i = 0;i<letters.length;i++){
//     var letterBtn = $("<button class='letter-button letter letter-button-color'>");
//       $(letterBtn).attr("data-letter",letters[i])
//       $(letterBtn).text(letters[i])
//       $("#buttons").append(letterBtn)
//   }
//   $(".letter-button").on("click",function(){
//     var fridgeMagnet = $("<div class='letter fridge-color'>").text($(this).attr("data-letter"))
//     $("#display").append(fridgeMagnet)
//   })
//   $("#clear").on("click",function(){
//     $("#display").empty();
//     })