const questions = [
    {
        question: "JavaScript ia an ------- Language?",
        answers: [
            {text: "Object-oriented", correct: true },
            {text: "Onject-based", correct: false },
            {text: "Procedural", correct: false },
            {text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using JavaScript",
        answers: [
            {text: "Document.write", correct: false },
            {text: "Console.log", correct: false },
            {text: "Window.alert", correct: false },
            {text: "All of the above", correct: true },
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text: "function = myFunction()", correct: false },
            {text: "function myFunction()", correct: true },
            {text: "Function = Myfunction()", correct: false },
            {text: "Function : myFunction()", correct: false },
        ]
    },
    {
        question: 'How do you call a function named "myFunction" ',
        answers: [
            {text: "myFunction()", correct: true },
            {text: "call function myFunction()", correct: false },
            {text: "call function()", correct: false },
            {text: "call myFunction", correct: false },
        ]
    },
    {
        question: "How to write an IF statement in JavaScript ",
        answers: [
            {text: "if i = 5", correct: false },
            {text: "if (i == 5)", correct: true },
            {text: "if == 5 then", correct: false },
            {text: "if () = 5", correct: false },
        ]
    },
    {
        question: "How does a While Loop start?",
        answers: [
            {text: "while (i & 10)", correct: false },
            {text: "while i = 1 to 10", correct:false },
            {text: "while (i<=10;i++)", correct: false },
            {text: "while (i <= 10)", correct: true },
        ]
    },
    {
        question: "Hoe does a Foe Loop start?",
        answers: [
            {text: "for (i=0; i<=5; i ++)", correct: true },
            {text: "for i= 1 to 5", correct:false },
            {text: "for(i<=10;i++)", correct: false },
            {text: "for (i & 5)", correct: false },
        ]
    },
    {
        question: "How can you add a comment in JavaScript",
        answers: [
            {text: "!---This is a comment---!", correct: false },
            {text: "//This is a comment", correct: true },
            {text: "/*--This is a comment---*/", correct: false },
            {text: "'This is a comment'", correct: false },
        ]
    },
    {
        question: "How do you declare a JavaScript variable",
        answers: [
            {text: "Variable carName", correct: false },
            {text: "var carName", correct: true },
            {text: "v carName", correct: false },
            {text: "Var Carname", correct: false },
        ]
    },
    {
        question: "which operator is used to assign a value to a variable?",
        answers: [
            {text: "=", correct: true },
            {text: "*", correct: false},
            {text: "-", correct: false },
            {text: "+", correct: false },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {text: "onclick", correct: true },
            {text: "onmouseclick", correct: false},
            {text: "onchange", correct: false },
            {text: "None", correct: false },
        ]
    },
    {
        question: "How is eveything treated in HTML DOM?",
        answers: [
            {text: "Arrays", correct:false },
            {text: "Attributes", correct: false},
            {text: "Elements", correct: false },
            {text: "Node", correct: true },
        ]
    },
    {
        question: "Which object is the top of the hierarchy?",
        answers: [
            {text: "Window Object", correct: true },
            {text: "Document Object", correct: false},
            {text: "Form Object", correct: false },
            {text: "Form Control Elements", correct: false },
        ]
    },
    {
        question: "The setTimeout() belongs to which object?",
        answers: [
            {text: "Elemen", correct:  false},
            {text: "Location", correct: false},
            {text: "Window", correct: true },
            {text: "Event", correct: false },
        ]
    },
    {
        question: "What will be the result  of the following JavaScript var x = 'Volvo'+16+4 ",
        answers: [
            {text: "164volvo", correct: false },
            {text: "Volvo164", correct: true},
            {text: "volvo20", correct: false },
            {text: "20volvo", correct: false },
        ]
    },
    
]
const  questionElement = document.getElementById("question")
const  answerButtons = document.getElementById("answer-buttons")
const  nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}
 function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
    }
 }


function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"}


  function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
  }
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()}
        else{
            startQuiz()
        }
    }
 )

startQuiz();
