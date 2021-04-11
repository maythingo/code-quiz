//Questions~
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

/*
Timer:
    - Initial timer is 75 seconds (D)
    - Timer should start ticking when you press start quiz. (D)
    - Format is just in seconds. 75 -> 74 -> 73 -> ... (D)
    - Quiz is over when timer reaches 0 seconds.
    - If you choose an incorrect answer, timer gets reduced by 10 seconds.

Quiz:
    - it should have a question in <p> tag.
    - choices are buttons.
    - when pressed, question can be correct or incorrect below all the answers.
    - each question should go on until either time is up or user is done with all the questions.
*/


var timer = document.getElementById('time');
var timerId;
var currQuestion;
var currTime;

function startTimer() {
    // Get the time from index.html
    currTime = parseInt(timer.textContent);
    // setInterval that decrements by 1 until 0 is reached.
    timerId = setInterval(function() {
        // Decrement the time.
        currTime = currTime - 1;
        timer.textContent = currTime;
        // if decemented time is remaining, keep on calling itself.
        if (currTime === 0) {
            console.log('it is done!!');
            clearInterval(timerId);
        }
        // else, stop the timer.
    }, 1000);
}

// 1. go to questions array
// 2. grab a question at index 0
//title: "Commonly used data types DO NOT include:",
///choices: ["strings", "booleans", "alerts", "numbers"],
///answer: "alerts"
// 3. convert that question into html.
// title -> <h2>Commonly used data types DO NOT include:</h2>
// choices -> <button id="choice1">strings></button>
//<button id="choice2">booleans></button>
// ....

function displayQuestion(index) {
    // Grab a question at specified index.
    var question = questions[index];
    // Convert the given question into HTML.
    /*
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    */
    // Convert title into HTML.
    var title = document.getElementById("quiz-question");
    title.textContent = question.title;
    var quizChoices = document.getElementById("quiz-choices");
    // Empty the children of quizChoices
    quizChoices.textContent = '';
    // Convert choices to HTML.
    // Loop over the choice
    for (var i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i];
        // Display that choice into the brwoser.
        // Create a new element and define some attributes and src.
        var choiceEL = document.createElement("ol");
        choiceEL.textContent = choice;
        // Insert that element into a div.
        quizChoices.appendChild(choiceEL);
        choiceEL.addEventListener("click", function(event) {
            // Determine whether or not the button that's been clicked is right or wrong.
            // Grab the "supposed" answer
            var answer = question.answer;
            // Grab the choice
            var chosen = event.target.innerText;
            // Compare whether answer is equal to choice.
            var feedbackElem = document.getElementById("feedback");
            if (answer === chosen) {
                // When it is correct
                feedbackElem.textContent = "You got the correct choice!";
                currQuestion = currQuestion + 1;
                displayQuestion(currQuestion);
            } else {
                // When it is incorrect
                feedbackElem.textContent = "You are incorrect!";
                // Penalize 10 seconds
                currTime = currTime - 10;
            }
        });
    }
    
}

var startButton = document.getElementById('start');
  
startButton.addEventListener("click",function() {
    currQuestion = 0;
    startTimer();
    displayQuestion(currQuestion);
});
