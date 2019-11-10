class AboutMalmoQuiz extends Domer { 
    
    _correctAnswer = "tower";
    _userAnswer;
    _listOfQuestions = [];

    submitMalmoButton() {
        // Check if answer is true coparred with real answer
        (this._userAnswer === this._correctAnswer) ? console.log("Correct answer!" + " " + this._userAnswer) : console.log("Too bad, that is incorrect. Correct answer is:" + " " + this._correctAnswer);
        return;
        }

        // Removes input from user and "${this._userAnswer}" in DOM (below).
        emptyInputField(){ 
        this._userAnswer = "";       
    }

    render(html){
        return html`
        <section>
            <br>
            <h1>About Malmö</h1>
            
            <h4>What is "Turning Torso" in Malmö?</h4><br>
            
            <input type="text" bind="_userAnswer"><br><br>
            
            <button click="submitMalmoButton" type="button"> Submit answer </button>
            <button click="emptyInputField" type="button"> Empty input field </button> 
            <h4>Your answer: ${this._userAnswer} <br> </h4> <br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
                
        `
    }

}