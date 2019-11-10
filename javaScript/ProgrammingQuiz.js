class ProgrammingQuiz extends Domer{
    
    _correctAnswer = "one line code";
    // _question = "";
    _userAnswer;
    _listOfQuestions = [];
    // thisQuestionList = new QuizList();

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
            <h4>It's a...</h4>
            
            <input type="text" bind="_userAnswer"><br>
            
            <button click="submitProgrammingButton" type="button"> Submit answer </button>
            <button click="emptyInputField" type="button"> Empty input field </button> 
            <h4>Your answer: ${this._userAnswer} <br> </h4><br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
        
        `
    }

}
