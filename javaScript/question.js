// THIS CLASS REPRESENT A QUESTION

class Question extends Domer {

    _quizQuestion = '';
    _quizAnswer = '';
    _userAnswer = '';
    
    // Sending in attributes to constructor, which construct the attributes.
    constructor(quizQuestion, quizAnswer, userAnswer,) {
        super();
        this._quizQuestion = quizQuestion;
        this._quizAnswer = quizAnswer;
        this.userAnswer = userAnswer;
    }

    // Check if answer from user is correct with real answer
    checkAnswer(){
        return this._userAnswer === this._quizAnswer;
    }
/*
    render(html){
        return html`
        <section>
        
        </section>
        ´


    }
*/
}