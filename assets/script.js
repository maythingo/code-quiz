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
        if (currTime - 1 <= 0) {
            currTime = 0;
            console.log('it is done!!');
            clearInterval(timerId);
        } else {
            currTime = currTime - 1;
        }
        timer.textContent = currTime;
        // if decemented time is remaining, keep on calling itself.
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
                // if currQuestion is equal to the length of questions array.
                // then we display the results
                if (currQuestion === questions.length) {
                    // We are done!
                    clearInterval(timerId);
                    displayResults();
                } else {
                    displayQuestion(currQuestion);
                }
            } else {
                // When it is incorrect
                feedbackElem.textContent = "You are incorrect!";
                if (currTime - 10 <= 0) {
                    currTime = 0;
                    displayResults();
                } else {
                    currTime = currTime - 10;
                }
            }
        });
    }
    
}

function displayResults() {
    // Clear children.
    var contentEl = document.getElementsByClassName("content").item(0);
    contentEl.textContent = '';
    //Build the  result.
    var H2El = document.createElement("h2");
    H2El.setAttribute("id", "H2El");
    H2El.textContent = "All Done!";
    
    contentEl.appendChild(H2El);

    var pageEl = document.createElement("p");
    pageEl.setAttribute("id", "pageEl");
    pageEl.textContent = 'Your final score is: ' + currTime;
    contentEl.appendChild(pageEl);

    var labelEl = document.createElement("label");
    labelEl.setAttribute('for', 'initials');
    labelEl.textContent = "Enter Initials:";
    contentEl.appendChild(labelEl);
    var inputEl = document.createElement("input");
    inputEl.setAttribute('id', 'input-initials');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('name', 'initials');
    contentEl.appendChild(inputEl);

    var submitEl = document.createElement('button');
    submitEl.setAttribute('type', 'submit');
    submitEl.textContent = 'Submit';
    submitEl.addEventListener('click', function() {
        // Grab the value typed in input field
        var initial = inputEl.value;
        // Store that into localStorage
        localStorage.setItem(initial, currTime);
    });
    contentEl.appendChild(submitEl);
}

var startButton = document.getElementById('start');
  
startButton.addEventListener("click",function() {
    currQuestion = 0;
    startTimer();
    displayQuestion(currQuestion);
    startButton.remove();
});
