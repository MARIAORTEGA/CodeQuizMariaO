var startbutton = document.getElementById('start')
var questionContainer = document.getElementById ('questions')
var questions = [
    {question: 'what is',
    answers: [
        {text: 'TRUE', correct: false},
        {text: 'FALSE', correct: true}
    ]}
]



startbutton.addEventListener('click', startGame)




function startGame() {
startbutton.classList.add('hide')
questionContainer.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer () {

}