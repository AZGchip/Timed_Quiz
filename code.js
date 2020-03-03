
//quiz box variable
var qb = document.getElementById("quiz-box");
var selectQ = ""
var sq = ""
var selectedBox = document.getElementById(sq)
function startQuiz() {

}
var questionPick = ["0", "1", "2", "3", "4"]
var questionOrder = []
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
    selectedBox.style.display = "block";
}
//when user hits submit 
function nextQuestion() {
// hides active div
    selectedBox.style.display = "none";
//adds question to QUESTIONORDER. removes selected question from QUESTIONPICK
    var index = questionPick.indexOf(selectQ);
    questionOrder.push(selectQ)
    if (index > -1) {
        questionPick.splice(index, 1);
    }
    
    question()
}

selectedBox.getElementsByClassName("a0")[0].addEventListener("click",)
selectedBox.getElementsByClassName("a1")[0].addEventListener("click",)
selectedBox.getElementsByClassName("a2")[0].addEventListener("click",)
selectedBox.getElementsByClassName("a3")[0].addEventListener("click",)


