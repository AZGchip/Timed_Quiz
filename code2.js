//questions and answers
var quizQuestions = ["'1'+'1'=", "2+2=", "3+3=", "4+4=", "5+5="];
var answer0 = ["11", "2", "45", "10"];
var answer1 = ["4", "22", "8", "0"];
var answer2 = ["6", "9", "2", "5"];
var answer3 = ["8", "9", "10", "11"];
var answer4 = ["10", "5", "55", "15"];
var answerObj = [answer0, answer1, answer2, answer3, answer4];
var userAnswer = [];
var correct = 0;
var wrong = 0;
var noAnswer = 0;
var interval;

var questAmount = quizQuestions.length;
var q = 0;
//on startup displays title
$("#quizbox").html(`
<div class="row">
<h1 class="title col-md-12 text-center "> TIMED QUIZ </h1>
</div>
<div class="row">
    <div class="col-md-12 btn btn-primary btn-lg "id="start-button">Start Quiz</div>
</div>
`)

function nextQuestion() {

    var selAns = answerObj[q]
    // for loop builds button based on answer array. math.rounds selects randomly from 1 to 0. appends if 1. prepends if 0
    for (var a = 0; a < selAns.length; a++) {
        var rand = Math.round(Math.random());
        var quizButton = $("<div class='btn btn-primary btn-block qbutton'>");
        $(quizButton).attr("answer", selAns[a]);
        $(quizButton).text(selAns[a]);
        if (rand === 1) {
            $("#quizbox").append(quizButton);
        }
        else {
            $("#quizbox").prepend(quizButton);
        }

    }
    //the question is added after the answers are displayed and is prepended to the top of #QUIZBOX
    $("#quizbox").prepend(`<h1 class="question col-md-12">` + quizQuestions[q] + `</h1>`);

    //on click function stores button value to USERANSWER, clears #QUIZBOX , adds 1 to Q , and either starts NEXTQUESTION() again or starts QUIZEND()
    $(".qbutton").on("click", function () {
        userAnswer.push($(this).attr("answer"));

        $("#quizbox").empty();
        q++
        if (q == questAmount) {
            quizEnd()

        }
        if (q < questAmount) {

            nextQuestion()
        }
    })


}
//when all answers solved or timer runs out, quiz end displays results
function quizEnd() {
    clearInterval(interval)
    $("#quizbox").append(`
    <h1 class="text-center col-md-12 text-center"> Quiz Over </h1>
    `)
    for (var i = 0; i < questAmount; i++) {
        var cAnswer = answerObj[i];
        //if the USERANSWER for the question is equal to CANSWER[0], append result
        if (cAnswer[0] == userAnswer[i]) {
            correct++;
            var result = $(`
            <h3 class="col-md-12 question text-center">`+ quizQuestions[i] + `</h3>
            <div class="row">
              <div class="col-md-6 text-center ">Correct Answer: `+ cAnswer[0] + `</div>
              <div class="col-md-6 bg-success text-center">Your Answer: `+ userAnswer[i] + `</div>
            </div><hr>
            `)
            $("#quizbox").append(result)
        }
        //if not answered, appends not answered result
        else if (userAnswer[i] == "Not Answered") {
            noAnswer++;
            var noresult = $(`
            <h3 class="col-md-12 question text-center">`+ quizQuestions[i] + `</h3>
            <div class="row">
              <div class="col-md-6 text-center ">Correct Answer: `+ cAnswer[0] + `</div>
              <div class="col-md-6 bg-warning text-center">Your Answer: `+ userAnswer[i] + `</div>
            </div><hr>
            `)
            $("#quizbox").append(noresult);
        }
        //if incorrect append BADRESULT
        else {
            wrong++;
            var badresult = $(`
            <h3 class="col-md-12 question text-center">`+ quizQuestions[i] + `</h3>
            <div class="row">
              <div class="col-md-6 text-center ">Correct Answer: `+ cAnswer[0] + `</div>
              <div class="col-md-6 bg-danger text-center">Your Answer: `+ userAnswer[i] + `</div>
            </div><hr>
            `)
            $("#quizbox").append(badresult);
        }
        
    }
    // Scoreboard bottom displays correct, incorrect, no answer, and percent correct
    var percent = (correct / quizQuestions.length) * 100;
    $("#quizbox").append(`
        <div class="row">
        <h4 class="col-md-4 text-center">Correct: `+ correct + `</h4>
        <h4 class="col-md-4 text-center">Incorrect: `+ wrong + `</h4>
        <h4 class="col-md-4 text-center">No Answer: `+ noAnswer + `</h4>
        </div><hr>
        <div class="row">
        <h3 class="col-md-12 text-center">Your Score: </h3>
        </div
        <div class="row">
        <h2 class="col-md-12 text-center"id="percent">`+percent+`%</h2>
        </div
        `)
    if(percent >= 80){
        $("#percent").css("color","green")
    }
    if(percent < 80 && percent > 60){
        $("#percent").css("color","orange")
    }
    if(percent <= 60){
        $("#percent").css("color","red")
    }

}

//timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
        // when timer hits zero clears interval, fills in any blanks in USERANSWER 
        if (--timer < 0) {

            while (userAnswer.length < quizQuestions.length) {
                userAnswer.push("Not Answered");
            }

            $("#quizbox").empty();
            quizEnd();

        }
    }, 1000);
}
//start button starts timer and quiz
$("#start-button").on("click", function () {
    $("#quizbox").empty();
    var min = 60 * 1,
        display = $('#time');
    startTimer(min, display);
    nextQuestion();
});