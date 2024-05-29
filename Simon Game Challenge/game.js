
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomNumber = Math.round(Math.random()*3);
var randomChosenColour = buttonColours[randomNumber];
var GameOn = true;
var level = 0;

// generate new level
function nextSequence(){
    randomNumber = Math.round(Math.random()*3)
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log(randomChosenColour);
    makeSound (randomChosenColour);

    $("#"+randomChosenColour).ready(function () {
        $("#"+randomChosenColour).addClass("pressed");
        setTimeout(function() {
            $("#"+randomChosenColour).removeClass("pressed");
        }, 300);
    });
    level = gamePattern.length - 1;
    $("#level-title").text("Level "+level);
}

// responses of clicks
$(".btn").on("click",function(){
    var self = this;
    $(this).addClass("pressed");
    setTimeout(function (){$(self).removeClass("pressed")},100);
    makeSound (self.id);
    console.log(self.id);
    var userChosenColour = self.id
    userClickedPattern.push(userChosenColour);
    checkAnswer()
});

// initializing game
$(document).keypress(function(event){
    if (GameOn === true){
    nextSequence();
    GameOn = false;
    }
});

// making sound
function makeSound (clickedColor){

    switch (clickedColor) {
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;

        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;

        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;

        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;

        default:
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            break;
    }
}

// check answer
function checkAnswer(){
    if (userClickedPattern[userClickedPattern.length-1] === gamePattern[gamePattern.length-1]){
        if (userClickedPattern.length === gamePattern.length){
            //5. Call nextSequence() after a 1000 millisecond delay.
            console.log("success");
            setTimeout(function () {
              nextSequence();
              userClickedPattern = []; // reset user pattern for next level
            },1000);
        }
    } else{
        console.log("failed");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 300);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    GameOn = true;

}