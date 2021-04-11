var clear = document.getElementById('clear');
var back = document.getElementById("back");
var highScore = document.getElementsByClassName('high-scores').item(0);


for (var i = 0; i < localStorage.length; i++) {
    var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);
    var liEl = document.createElement("li");
    liEl.textContent = initials + " " + score;
    highScore.appendChild(liEl);
}

//clear scores
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

//go back to beginning page
back.addEventListener("click", function () {
    location.replace('index.html');
});