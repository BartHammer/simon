var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

var keyPressed = false;





// for(var i=0; i < $(".btn").length; i++) {
//     $(".btn").click(function (){
//     console.log($(event.target.id))


$(document).keydown(function (){
    
    // $('#'+randomChosenColour).fadeOut(250).fadeIn(250);
    
    if (keyPressed === false) {
        var randomChosenColour = nextSequence();
        playSound(randomChosenColour);
        animatePress(randomChosenColour);
        keyPressed = true;
        console.log(keyPressed);
    }

    console.log(keyPressed);


    console.log(gamePattern);
    // var randomChosenColour = nextSequence();   @@@@@@@@@@@@@@@@@@@@@@@@@

    // var randomNumber = nextSequence();
    
    // console.log(randomNumber);

    // var randomChosenColour = buttonColours[randomNumber];

    // playSound (randomChosenColour);   @@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // animatePress(randomChosenColour);   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


    // gamePattern.push(randomChosenColour);
});

$(".btn").click(function () {
    var userChosenColour = ($(this).attr("id"));
    userClickedPattern.push(userChosenColour);


    animatePress (userChosenColour);
        // $('#'+userChosenColour).fadeOut(250).fadeIn(250);  - wymienilem na funkcje animatePress
    playSound(userChosenColour);

    console.log(userClickedPattern + " user Clicked Pattern");
    console.log(gamePattern + " game Pattern");

    // if (gamePattern.length === userClickedPattern.length) {
        checkAnswer();   
    // }






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
    
    // console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    $("#level-title").text("Level " + level);

    level++;

    console.log(level);

    return randomChosenColour;
};


function checkAnswer() {
    if (arraysEqual(userClickedPattern, gamePattern) === false) {
        console.log("wrong");
        startOver();
        var wrongSound = new Audio ("sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over")
        setTimeout (function(){
            console.log("timeout wrong");
            $("body").removeClass("game-over");
           
        },200);
        $("#level-title").text("Press A Key to Start");
    } else if (userClickedPattern.length === gamePattern.length && arraysEqual(userClickedPattern, gamePattern) === true) {
        console.log("succes");
        setTimeout (function(){
            console.log("timeout succes");
            userClickedPattern = [];
            var randomChosenColour = nextSequence();
            playSound(randomChosenColour);
            animatePress(randomChosenColour);
            console.log(gamePattern);
        },1000);
    };

    // if (arraysEqual(userClickedPattern, gamePattern)) {
    //     console.log("succes");
    //     setTimeout (function(){
    //         console.log("timeout succes");
    //         userClickedPattern = [];
    //         var randomChosenColour = nextSequence();
    //         playSound(randomChosenColour);
    //         animatePress(randomChosenColour);
    //         console.log(gamePattern);
    //     },1000);
    // } else {
    //     console.log("wrong");
    //     startOver();
    //     var wrongSound = new Audio ("sounds/wrong.mp3");
    //     wrongSound.play();
    //     $("body").addClass("game-over")
    //     setTimeout (function(){
    //         console.log("timeout wrong");
    //         $("body").removeClass("game-over");
           
    //     },200);
    //     $("#level-title").text("Press A Key to Start");
    // }

}

function startOver () {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    keyPressed = false;
}
function arraysEqual(a, b) {
    // if (a === b) return true;
    // if (a == null || b == null) return false;
    // if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
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