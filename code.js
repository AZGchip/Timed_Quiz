
//quiz box variable
var qb = document.getElementById("quiz-box");
var selectQ = ""
var sq = ""

function startQuiz() {

}
var questionPick = ["0", "1", "2", "3", "4"]
var questionOrder = []
var checkAnswer = {ques0:"1",ques1:"3",ques2:"2"}
function question() {
    // If QUESTIONPICK is empty print results
    if (questionPick.length === 0) {
        document.getElementById("quiz-box").innerHTML = "all questions answered";
        return 0;
    }

    // selects random question by selecting from QUESTIONPICK
    selectQ = questionPick[Math.floor((Math.random() * questionPick.length))];
    //displays selected div
    sq = "q" + selectQ;
    document.getElementById(sq).style.display = "block";
}
//when user hits submit 
function nextQuestion() {
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
function buttons(){
document.getElementById(sq).getElementsByClassName("a0")[0].addEventListener("click")
document.getElementById(sq).getElementsByClassName("a1")[0].addEventListener("click")
document.getElementById(sq).getElementsByClassName("a2")[0].addEventListener("click")
document.getElementById(sq).getElementsByClassName("a3")[0].addEventListener("click")
}

