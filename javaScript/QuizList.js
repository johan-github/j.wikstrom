class QuizList extends Domer {

    _listOfQuestions = [];

    constructor(listOfQuestions){
        super();
        this._listOfQuestions = listOfQuestions;
    }
    pushQuestionIntoList(){
        this._listOfQuestions.push(new Question(quizQuestion, quizAnswer, userAnswer));
        return this._listOfQuestions;
    }
}