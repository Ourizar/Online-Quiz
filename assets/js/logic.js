var questionsEl = document.getElementById("questions")
var startButton = document.getElementById('start-button')
var currentQuestionIndex = 0
var currentChoices = document.getElementById("answer-choices")
var time = questions.length * 15; 
var timerEl = document.getElementById("time")

function countDown(){
    time--
    timerEl.textContent = time;
    if(time === 0){
        alert("game over");
    }
}

function startQuiz(){
    var startScreenEl = document.getElementById("start-screen")
     startScreenEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    setInterval(countDown, 1000)
    getQuestion();

    
}
//  FOr loop to read all object in the array
// for (var i = 0; i < questions.length; i++ ){
//     // console.log(questions[i])
//     var currentQuestionObj = questions[i]
//     console.log(currentQuestionObj.question)
//     console.log(currentQuestionObj.choices)
//     console.log(currentQuestionObj.answer)
// }
startButton.onclick = startQuiz;

function getQuestion(){
    var currentQuestionObj = questions[currentQuestionIndex]
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestionObj.question
    currentChoices.innerHTML = "";
    currentQuestionObj.choices.forEach(function(choice){
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice
        choiceBtn.onclick = questionClick
        currentChoices.appendChild(choiceBtn)
    })     

    
}

function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer){
        time-=15;
    }
    currentQuestionIndex++;
    
    if(currentQuestionIndex === questions.length){

        alert("Game Over!")

    }else{
        getQuestion()
    }

}

// function quizEnd(){

// }

// function(){

// }
// questionsTitle.textContent = currentQuestion.title