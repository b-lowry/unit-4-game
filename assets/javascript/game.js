//Generate a random number for user to guess to

//Generate a random number for each one of the crystal buttons

//Add points from clicked crysyal button to total score(value of buttons stays constant through round)

//When score matches random number user gets a win. Reset the computer generated random number, current score, values for crystal buttons

//When score is over the random number user gets a loss. Reset all

//values for crystals is between 1-12
//random number to match is between 19-120

var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var randomNumber = 0;
var totalScore = 0;

function crystalNums() {
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
};

function startGame() {
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#computer-number").text(randomNumber);
    totalScore = 0;
    crystalNums();
}

function updateScore() {
    $("#current-score").text(totalScore);
};


function winAndLoss() {
    if(randomNumber === totalScore) {
        wins ++;
        console.log(wins);
        $("#wins").text(wins);
        alert("You Win")
        totalScore = 0;
        $("#current-score").text(totalScore);
        startGame();
    } else if (totalScore > randomNumber) {
        losses ++;
        console.log(losses);
        $("#losses").text(losses);
        alert("you Lose")
        totalScore = 0;
        $("#current-score").text(totalScore);
        startGame();
    }
}

$(document).ready(function() {
    startGame();
});

$("#crystal1").on("click", function() {
    totalScore += crystal1;
    console.log(crystal1);
    updateScore();
    winAndLoss();
})

$("#crystal2").on("click", function() {
    totalScore += crystal2;
    console.log(crystal2);
    updateScore();
    winAndLoss();
})

$("#crystal3").on("click", function() {
    totalScore += crystal3;
    console.log(crystal3);
    updateScore();
    winAndLoss();
})

$("#crystal4").on("click", function() {
    totalScore += crystal4;
    console.log(crystal4);
    updateScore();
    winAndLoss();
})