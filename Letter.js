var letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.display = function(){
        if(this.guessed){
            return this.letter;
        }
        else{
            return "_";
        }
    }
    this.guess = function(char){
        if(char.toLowerCase() === this.letter.toLowerCase()){
            this.guessed = true;
        }
    }
}

module.exports = letter;