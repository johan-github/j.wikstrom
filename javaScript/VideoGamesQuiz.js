class VideoGamesQuiz extends Domer{

    _correctAnswer = "super mario";
    _userAnswer;
    
    submitVideoGamesButton() {
        // Check if answer is true coparred with real answer
        (this._userAnswer === this._correctAnswer) ? console.log("Correct answer!" + " " + this._userAnswer) : console.log("Too bad, that is incorrect. Correct answer is:" + " " + this._correctAnswer);
        return;
        }

        emptyInputField(){ 
        this._userAnswer = "";       
    }

    render(html){
        return html`
        <section>
            <br>
            <h1>Video Games</h1>
            
            <h4>Who saves Princesess Peach from Bowser?</h4>
            
            <input type="text" bind="_userAnswer"><br><br>
            
            <button click="submitVideoGamesButton" type="button"> Submit answer </button>
            <button click="emptyInputField" type="button"> Empty input field </button>

            <h4>Your answer: ${this._userAnswer} <br> </h4><br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
                
        `
    }

}