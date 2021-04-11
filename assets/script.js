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

function startTimer() {
    // setInterval that decrements by 1 until 0 is reached.
    timerId = setInterval(function() {
        // Get the time from index.html
        var currentTime = parseInt(timer.textContent);
        // Decrement the time.
        currentTime = currentTime - 1;
        timer.textContent = currentTime;
        // if decemented time is remaining, keep on calling itself.
        if (currentTime === 0) {
            console.log('it is done!!');
            clearInterval(timerId);
        }
        // else, stop the timer.
    }, 1000);
}




var startButton = document.getElementById('start');
  
startButton.addEventListener("click",function() {
   startTimer();
});
