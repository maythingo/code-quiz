var clear = document.querySelector("#clear");
var back = document.querySelector("#back");
var highScore = document.querySelector("#high-scores");



//local storage
var allScores = localStorage.getItem("allScores")
allScores = JSON.parse(allScores);

if (allScores !== null){
    for (var i = 0; i < allScores.length; i++){
        var liEl = document.createElement("li");
        liEl.textContent = allScores[i].initials + "" + allScores[i].scores;
    }
}

//clear scores
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

//go back to beginning page
back.addEventListener("click", function () {
    location.replace("index.html")
});