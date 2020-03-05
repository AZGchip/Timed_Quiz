
//quiz box variable
var qb = document.getElementById("quiz-box");
var selectQ = ""
var sq = ""
var ui = ""
var result
function startQuiz() {

}
var questionPick = ["0", "1", "2", "3", "4"]
var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"]
var questionOrder = []
var checkAnswer = {
    q0: "1",
    q1: "3",
    q2: "2",
    q3: "1",
    q4: "2",
}
var uInput = {
    u0: "na",
    u1: "na",
    u2: "na",
    u3: "na",
    u4: "na",
}
function question() {
    // If QUESTIONPICK is empty print results
    if (questionPick.length === 0) {
        resultMaker()
        return 0;
    }

    // selects random question by selecting from QUESTIONPICK
    selectQ = questionPick[Math.floor((Math.random() * questionPick.length))];
    //displays selected div
    sq = "q" + selectQ;
    ui = "u" + selectQ
    document.getElementById(sq).style.display = "block";
}

//when user hits submit 
function nextQuestion() {
    if (uInput[ui] == "na") {
        console.log("select an answer");
        return 0;
    }
    // hides active div
    document.getElementById(sq).style.display = "none";
    //adds question to QUESTIONORDER. removes selected question from QUESTIONPICK
    var index = questionPick.indexOf(selectQ);
    questionOrder.push(selectQ)
    if (index > -1) {
        questionPick.splice(index, 1);
    }

    question()
}

// takes INPUT from event class. sets UINPUT[SELECTED QUESTION] to user input
function ans(input) {
    uInput[ui] = input
    
}
//onclick events 
$(".a0").on("click", function () {
    event.stopPropagation();
    event.stopImmediatePropagation();
    ans(0)
    
})
$(".a1").on("click", function () {
    event.stopPropagation();
    event.stopImmediatePropagation();
    ans(1);
    
})
$(".a2").on("click", function () {
    event.stopPropagation();
    event.stopImmediatePropagation();
    ans(2);
})  
$(".a3").on("click", function () {
    event.stopPropagation();
    event.stopImmediatePropagation();
    ans(3);
})
$(".a4").on("click", function () {
    event.stopPropagation();
    event.stopImmediatePropagation();
    ans(4);
    
})
//determines if user answer id 
function resultMaker() {
    $("#quiz-box").append(`<h1>Quiz Finished</h1>`)
    for (var i = 0; i < questionOrder.length; i++) {
        if (checkAnswer["q" + questionOrder[i]] == uInput["u" + i]) {
            console.log("correct")
        }
        else{
            $("#quiz-box").append(""+ questions[questionOrder[i]] +"<hr>")
        }
    }

}