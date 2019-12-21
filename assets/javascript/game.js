/* declare global variables */
var magicNumber = "";
var wins = 0;
var losses = 0;
var yourNumber = 0;
var images = ["./assets/images/crystal1.png", "./assets/images/crystal2.png", "./assets/images/crystal3.png", "./assets/images/crystal4.png"];


/* get the number the user is supposed to guess (between 19-120) */
function randomMagicNumber() {
   magicNumber = Math.floor(Math.random()* 102) + 19;
}

// Initial Page setup
randomMagicNumber();
resetHTML ();
resetCrystalValues ();

/* add the click function to each crystal */
$(document).on("click", ".crystal", crystalClick);

/*write functions for resets */
function resetCrystalValues () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal"); /* addClass method to crystal variable */
        /* add method to each crystal variable */
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "90");
        $(".crystal-images").append(crystal);
    }
}

function resetHTML () {
    $("#magic-number").html(magicNumber);
    $(".win-loss-record").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".your-number").html(yourNumber);
    $(".crystal-images").empty();
}

function reset () {
    randomMagicNumber ();
    yourNumber = 0;
    resetHTML ();
    resetCrystalValues ();
}

// Click function for each image symbol
function crystalClick () {
    yourNumber += parseInt($(this).attr("value"));
    $(".your-number").html(yourNumber);
    if (yourNumber == magicNumber) {
        wins++;
        reset();
    }
    else if (yourNumber > magicNumber) {
        losses++;
        reset();
    };
};






