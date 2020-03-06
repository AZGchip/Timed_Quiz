//questions and answers
var quizQuestions = ["1+1=", "2+2=", "3+3=", "4+4=", "5+5="];
var answer0 = ["2", "11", "45", "10"];
var answer1 = ["4", "22", "8", "0"];
var answer2 = ["6", "9", "2", "5"];
var answer3 = ["8", "9", "10", "11"];
var answer4 = ["10", "5", "55", "15"];
var answerObj = [answer0, answer1, answer2, answer3, answer4];
var userAnswer = [];

var questAmount = quizQuestions.length;
var q = 0;

// function quizStart() {
//     timeStart(100)
nextQuestion()
function nextQuestion() {

    var selAns = answerObj[q]
    $("#quizbox").append("<h1 class='question'>" + quizQuestions[q] + "</h1>")
    for (var a = 0; a < selAns.length; a++) {
        var quizButton = $("<div class='button'>");
        $(quizButton).attr("answer", selAns[a]);
        $(quizButton).text(selAns[a]);
        $("#quizbox").append(quizButton)
    }
    $(".button").on("click", function () {
        userAnswer.push($(this).attr("answer"));
        q++;
        $("#quizbox").empty();
        if(q < quizQuestions.length){
        nextQuestion()   
        }
        if(q > quizQuestions.length){
        quizEnd()
        }
        
    })


}
function quizEnd(){
    for (var i = 0; i< quizQuestions.length; i++) {
        
        
    }
}

function timeStart(time) {
    setInterval(function () {
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