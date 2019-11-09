class ProgrammingQuiz extends Domer{
    
    _correctAnswer1 = "one line code";
    // _question = "";
    _userAnswer1;
    _listOfQuestions = [];
    // thisQuestionList = new QuizList();

    constructor() {
    super()
    }

    submitProgrammingButton() {
        // Check if answer is true coparred with real answer
        (this._userAnswer1 === this._correctAnswer1) ? console.log("Correct answer!" + " " + this._userAnswer1) : console.log("Too bad, that is incorrect. Correct answer is:" + " " + this._correctAnswer1);
        return
        }

        emptyInputField1(){ 
        this._userAnswer1 = "";       
    }

    render(html){
        return html`
        <section>
            <br>
            <h1>Programming</h1>
            
            <h4>What is a "ternary operator"?</h4><br>
            
            <input type="text" bind="_userAnswer1"><br><br>
            
            <button click="submitProgrammingButton" type="button"> Submit answer </button>
            <button click="emptyInputField1" type="button"> Empty input field </button> 
            <h4 id="showRightAnswer">Your answer: ${this._userAnswer1} <br> </h4><br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
                <!--  -->
        `
    }

}
