
//quiz box variable
var qb = document.getElementById("quiz-box");
var selectQ = ""
var sq = ""
function startQuiz() {

}
var questionPick = ["0", "1", "2", "3", "4"]
function question() {
    // If QUESTIONPICK is empty print results
    if (questionPick.length === 0) {
        document.getElementById("quiz-box").innerHTML = "all questions answered";
        return 0;
    }

    // selects random question by selecting from QUESTIONPICK
    selectQ = questionPick[Math.floor((Math.random() * questionPick.length))];
    sq = "q" + selectQ;
    document.getElementById(sq).style.display = "block";
}
function nextQuestion() {

    document.getElementById(sq).style.display = "none"
    var index = questionPick.indexOf(selectQ);
    if (index > -1) {
        questionPick.splice(index, 1);
    }
    question()
}