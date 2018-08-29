var Letter = require("./Letter");

var word = function(str){
    this.word = [];
    for(var i = 0; i < str.length; i++){
        this.word[i] = new Letter(str.charAt(i));
    }

    this.string = function(){
        var str = "";
        this.word.forEach(function(char){
            str += char.display() + " ";
        })
        return str;
    }

    this.guess = function(letter){
        var correct = false;
        this.word.forEach(function(char){
            if(!char.guessed){
            char.guess(letter);
                if(char.guessed){
                    correct = true;
                }
            }
        })
        return correct;
    }
}

module.exports = word;