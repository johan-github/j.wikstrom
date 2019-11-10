// THE "CREATE_YOUR_OWN_QUIZ"-CLASS. UNDER CONSTRUCTION.
// POSSIBLE TO SAVE QUESTION AND ANSWER.

class CreateQuiz extends Domer{

    _quizQuestion;
    _quizAnswer;
    _createQuizList = [];
    
    constructor(_createQuizList){
    super()
    this._createQuizList.push(new QuizList(this));
}

    // save one question and an answer to quizList
    // If not both fields contain some letters function will not push.
    storeQuizButton(){
        if (this._quizQuestion == "" || this._quizAnswer == ""){
            console.log("not all fields filld");
        }
        else{
        this._createQuizList.push(this._quizQuestion, this._quizAnswer);
            console.log(this._createQuizList);
        }
    }

    resetButtonCreateQuiz(){ // Removes input from user.
        this._quizQuestion = "";
        this._quizAnswer = "";
    }
    //${this._createQuizList[QuizList]} render won't read this... (made for "List: " below.)
    render(html){
        return html`
        <section>

            <h1>Under construction</h1>
            
            <input type="text" bind="_quizQuestion" placeholder="Enter a question">
            <input type="text" bind="_quizAnswer" placeholder="Enter an answer">
            <br><br>
            <button click="storeQuizButton" type="button"> Store Q&A</button>
            <button click="resetButtonCreateQuiz" type="button">Reset</button>
            <br><br>
            <button click="startButtonCreateQuiz" type="button">Start Quiz</button>
            <br><h3>List: ${this._createQuizList[QuizList]}</h3>
            
            <br>
            <h6>Want to reset? Press "F5" to reset game completley. </h6>
        </section>
        
        `
    }
}
