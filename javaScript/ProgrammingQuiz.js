class ProgrammingQuiz extends Domer{
    
    _correctAnswer = "one line code";
    _userAnswer;

    submitProgrammingButton() {
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
            <h1>Programming</h1>
            
            <h4>What does "ternary operator" mean?</h4><br>
            <h5>It's a...</h5>
            
            <input type="text" bind="_userAnswer"><br><br>
            
            <button click="submitProgrammingButton" type="button"> Submit answer </button>
            <button click="emptyInputField" type="button"> Empty input field </button> 
            <h4>Your answer: ${this._userAnswer} <br> </h4><br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
        
        `
    }

}
