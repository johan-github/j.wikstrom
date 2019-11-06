class Quiz extends Domer{
    
    _questions = [];
    _topic;
    _extraQuestion;
    // addQuestion;
    // Variables shown above is not needed but makes it more clear of what's in use.

    // These props are inhereted from the instance that is created in App.js
    constructor(questions, topic, extraQuestion){
        super()
        this._questions = questions;
        this._topic = topic;
        this._extraQuestion = extraQuestion;
        // Pushes an additional question which is inherited from app.js as we create a new quiz
        // this.addExtraQuestion(this.extraQuestion);
    }
}
    // This function pushes a question to the List (array) "questions"
    /*addExtraQuestion(extraQuestion){
        this.questions.push(extraQuestion);}*/
    
    /*addQuestion(question, answer, topic){
            let newMalmo = new AboutQuiz(question, answer, topic);
            this.questions.push(newMalmo);
    }
    writeQuestions(topic){
        let quizList = [];
        for(let quiz in this.questions){
            if(this.quiz.getTopic() == topic){
                quizList.push(quiz);
            }
        }
        return quizList;
    }
    */

