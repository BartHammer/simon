var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;







// for(var i=0; i < $(".btn").length; i++) {
//     $(".btn").click(function (){
//     console.log($(event.target.id))


$(document).keydown(function (){
    
    // $('#'+randomChosenColour).fadeOut(250).fadeIn(250);
    
    console.log(gamePattern);
    var randomChosenColour = nextSequence();

    // var randomNumber = nextSequence();
    
    // console.log(randomNumber);

    // var randomChosenColour = buttonColours[randomNumber];

    playSound (randomChosenColour);
    animatePress(randomChosenColour);
    // gamePattern.push(randomChosenColour);
});

$(".btn").click(function () {
    var userChosenColour = ($(this).attr("id"));
    userClickedPattern.push(userChosenColour);


    animatePress (userChosenColour);
        // $('#'+userChosenColour).fadeOut(250).fadeIn(250);  - wymienilem na funkcje animatePress
    playSound(userChosenColour);

    console.log(userClickedPattern);
    console.log(gamePattern);
    // nextSequence();

});



// var userChosenColour = ($(".btn" + [i]).attr("id"));
// console.log($("button").attr("data-id"));
// var userChosenColour = $(this).attr("data-id");
// console.log(userChosenColour);
// userClickedPattern.push(userChosenColour);
// });
// }



// $(document).click(function() {

// function nextSequence() {
//     return Math.floor(Math.random() * 4);
// }

// var randomNumber = nextSequence();

// console.log(randomNumber);

// var randomChosenColour = buttonColours[randomNumber];

// $('#'+randomChosenColour).fadeOut(250).fadeIn(250);

// console.log(randomChosenColour);

// gamePattern.push(randomChosenColour);

// console.log(gamePattern);

// });

// $('#'+randomChosenColour).fadeOut(250).fadeIn(250);

// playSound (randomChosenColour);

// var colour = $('#'+randomChosenColour);

// $(document).click(function (){
//     $('#'+randomChosenColour).fadeOut(250).fadeIn(250);
//     playSound(randomChosenColour);
// })

function nextSequence() {
    var randomNumber =  Math.floor(Math.random() * 4);

    // var randomNumber = nextSequence();
    
    console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    return randomChosenColour;

};

// SOUND PLAY FOR EACH DIV

function playSound (name) {
    switch (name) {
        case "blue":
            var blueSound = new Audio ("sounds/blue.mp3");
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio ("sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio ("sounds/red.mp3");
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio ("sounds/yellow.mp3");
            yellowSound.play();
            break;
    }
};

function animatePress (name) {
    // var activeButton = $("#" + currentColour);
    $('#'+name).addClass("pressed");

    setTimeout (function(){
        $('#'+name).removeClass("pressed");
    },100);
}