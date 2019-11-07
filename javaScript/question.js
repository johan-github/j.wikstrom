// THIS CLASS REPRESENT A QUESTION

class Question extends Domer {

    _quizQuestion = '';
    _userAnswer = '';
    _quizAnswer = '';
    
    constructor(quizQuestion, userAnswer, ) {
        super();
        this._quizQuestion = quizQuestion;
        this._quizAnswer = userAnswer;   
    }

    // Check if answer from user is correct with real answer
    checkAnswer(){
        return this._userAnswer === this._quizAnswer;
    }

}