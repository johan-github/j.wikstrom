// THIS CLASS REPRESENT A LIST. THIS LIST CONTAINS CONTENT FROM CLASS "QUESTION"
// THIS LIST WILL BE PICKED UP BY "CREATEQUIZ.JS".

class QuizList extends Domer {

    _listOfQuestions = [];

    pushQuestionIntoList(){
        this._listOfQuestions.push(new Question(this));
        return this._listOfQuestions;
    }
}