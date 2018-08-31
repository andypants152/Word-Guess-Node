var inquirer = require("inquirer");
var Word = require("./Word");


var wordBank = ["aardvark", "alligator", "alpaca", "anteater",
"antelope", "baboon", "badger", "beaver",
"bluebird", "bobcat", "buffalo", "bulldog",
"camel", "caterpillar", "cheetah", "chicken",
"chihuahua", "chipmunk", "couger", "crocodile",
"dolphin", "donkey", "elephant", "falcon",
"ferret", "gazelle", "gorilla", "groundhog",
"horse", "hummingbird", "iguana", "impala",
"jaguar", "kangaroo", "leopard", "lion",
"llama", "lobster", "manatee", "meerkat",
"mockingbird", "muskrat", "narwhal", "octopus",
"ostrich", "panda", "peacock", "rabbit", "raccoon",
"rattlesnake", "rhinoceros", "scorpion", "squirrel",
"tarantula", "walrus", "whale", "wolverine", "zebra"];
var currentWord, guessesLeft;

function initGame() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentWord = new Word(wordBank[index]);
    guessesLeft = 10;
    game();
}

function game() {
    if (guessesLeft > 0 && currentWord.string().indexOf("_") != -1) {
        console.log(currentWord.string());

        inquirer.prompt([{
            type: "input",
            message: "Guess a character:",
            name: "guess",
            validate: function (value) {
                if (value.toUpperCase() === value.toLowerCase() || value.length > 1) {
                    return "Please enter a single letter";
                }
                return true;
            }
        }]).then(function (resp) {
            var correct = currentWord.guess(resp.guess);
            if (correct) {
                console.log("Correct!");
            }
            else{
                guessesLeft--;
                console.log("Incorrect!");
                console.log(guessesLeft + " guesses left");
            }
            game();
        })
    }
    else{
        if(guessesLeft === 0){
            console.log("You lose!");
        }
        if(currentWord.string().indexOf("_") === -1){
            console.log("You Win!");
        }
        inquirer.prompt([{
            type: "confirm",
            message: "Play again?",
            name: "isNewGame"
        }]).then(function(resp){
            if(resp.isNewGame){
                initGame();
            }
        })
    }
}

initGame();