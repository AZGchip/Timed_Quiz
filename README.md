This is a program that uses arrays and and jquery to create a multiple choice timed quiz.
each question is displayed acording to the order of the arrays.
a for loop appends/prepends the selected question's answers and adds values to each div displayed as a button.
after the answers are added in a random order, the question is prepended so its on the top.
clicking a button will push that button's value (your answer)into an array, clear the #quizbox, add 1 to the question variable, and run the for loop again.
once all questions have been answered or the timer runs out, quizend() is run. 
quizend() takes the array of user answers and compares them to the first answer in the question's answer array(unanswerd are filled in when timer hits 0). correct it appends a premade html code with certain variables filled in.
once it displays all answers, it uses a count of correct, not answered and ,incorrect and displays them in three columns. the score is added by comparing correct to the amount of questions.