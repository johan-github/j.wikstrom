class QuizList extends Domer {

    _listOfQuestions = [];

    newQuestion = new Question();

    constructor(){
        super();
    }

    // Add new question to the list of questions
    add(newQuestion){
        this._listOfQuestions.push(newQuestion);
    }

    // Get list of questions
    getListOfQuestions(){
        return this._listOfQuestions.length;
    }
}