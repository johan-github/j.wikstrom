class CreateQuiz extends Domer{


    
    // _newQuestion = new Question()
    // _newQuiz;
    _quizQuestion;
    _quizAnswer;
    _createQuizList = [];
    constructor(){
    super()
    
    //this._newQuestion = newQuestion;
    }

    // save one question and an answer to quisList
    storeQuizButton(){ // _quizQuestion, _quizAnswer
        //_createQuizList = new QuizList(this)
        this._createQuizList.push(new QuizList(this));
        this._createQuizList.push(this._quizQuestion);
        this._createQuizList.push(this._quizAnswer);

        console.log(this._createQuizList);
        console.log(this._listOfQuestions);
        
    }
    // Check if answer from user is correct with real answer;
    checkAnswer(){
        // question = (this._userAnswer === this._quizAnswer) ? console.log("Correct answer!" + " " + this._userAnswer) : console.log("Too bad, that is incorrect. Correct answer is:" + " " + this._quizAnswer));
    }
    startButtonCreateQuiz(){
        console.log(this._createQuizList);
    }

    resetButtonCreateQuiz(){ // Removes input from user.
        this._quizQuestion = "";
        this._quizAnswer = "";
    }

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

        </section>
        
        `
    }
}
