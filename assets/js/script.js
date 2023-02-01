// Question box

let questionsBox = [
    {
        question : "How many bones are there in an adult human body?",
        options : ["186", "206", "286", "306"],
        answer : "206"
    },
    {
        question : "How many sides has a Hexagon?",
        options : ["5", "6", "7", "8"],
        answer : "6"
    },
    {
        question : "What is the longest river in the world?",
        options : ["Amazon River", "Nile", "Yellow River", "Congo River"],
        answer : "Nile"
    }, 
    {
        question : "In which country was the airline Ryanair founded?",
        options : ["Germany", "Ireland", "Scotland", "Spain"],
        answer : "Irland"
    }, 
    {
        question : "Who was assassinated on the 22nd of November 1963?",
        options :["Martin Luther King", "Jhon F Kennedy", "MK Gandhi", "Malcom X"],
        answer : "Jhon F Kennedy"
    }, 
    {
        question : "Which band released the song “Wonderwall” in the 90s?",
        options : ["Oasis", "Joy Divison", "The Verge", "Nirvana"],
        answer : "Oasis"
    }, 
    {
        question : "What was Euclid?",
        options : ["A philosopher", "A poet", "A painter", "A mathematician"],
        answer : "A mathematician"
    }, 
    {
        question : "What is the capital of Iraq?",
        options :["Baghdad", "Islamabad", "Tehran", "Amman"],
        answer :"Baghdad"
    }, 
    {
        question : "What colour is the “m” from the McDonald's logo?",
        options :["Blue", "Red", "Yellow", "Black"],
        answer :"Yellow"
    }, 
    {
        question : "What is guacamole made of?",
        options :["Banana", "Yoghurt", "Avocado", "Chick Pea"],
        answer :"Avocado"
    }
]


// question container variables

let questionsContainer = document.getElementById ("questions-container");
let questionTitle = document.getElementById("question-title");
let correctAnswer = "answer";

// display questions

function displayQuestion(questions) {
    let randomQuestions = Math.floor(Math.random() * questions.lenght);
    questionTitle.innerHTML = questions[randomQuestions.question];
    for(let i = 0; i < 4; i++) {
        document.getElementById(`option${i}`).innerHTML = questionBox[i].options[i];
    }
}


how can i get the title to a specific question in this array
function that gives random nbumber btw 0 - questionBox.lenght
add a general timer for entire quiz
connect highscores to javascript to reset

