//questions and answers
var quizQuestions = ["1+1=", "2+2=", "3+3=", "4+4=", "5+5="];
var answer0 = ["2", "11", "45", "10"];
var answer1 = ["4", "22", "8", "0"];
var answer2 = ["6", "9", "2", "5"];
var answer3 = ["8", "9", "10", "11"];
var answer4 = ["10", "5", "55", "15"];
var answerObj = [answer0, answer1, answer2, answer3, answer4];
var userAnswer = [];
var correct
var wrong
var noAnswer

var questAmount = quizQuestions.length;
var q = 0;

// function quizStart() {
//     timeStart(100)
nextQuestion()
function nextQuestion() {

    var selAns = answerObj[q]

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
    $("#quizbox").prepend(`<h1 class="question col-md-12">` + quizQuestions[q] + `</h1>`);
   
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
function quizEnd() {
    for (var i = 0; i < questAmount; i++) {
        var cAnswer = answerObj[i];
        if (cAnswer[0] == userAnswer[i]) {
            var result = $(`
            <div class="col-md-12 question">`+ quizQuestions[i] + `</div>
            <div class="row">
              <div class="col-md-6">`+ cAnswer[0] + `</div>
              <div class="col-md-6 bg-success">`+ userAnswer[i] + `</div>
            </div>
            `)
            $("#quizbox").append(result)
        }
        else {
            var badresult = $(`
            <div class="col-md-12 question">`+ quizQuestions[i] + `</div>
            <div class="row">
              <div class="col-md-6">`+ cAnswer[0] + `</div>
              <div class="col-md-6 bg-warning">`+ userAnswer[i] + `</div>
            </div>
            `)
            $("#quizbox").append(badresult)
        }

    }
}

function timeStart(time) {
    setInterval(function () {
        time--

    }, 1000);
}




