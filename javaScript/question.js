// THIS CLASS REPRESENT A QUESTION

class Question extends Domer {

    _quizQuestion;
    _quizAnswer;
    _userAnswer;
    
    // Sending in attributes to constructor, which construct the attributes.
    // When another class calls on THIS class, the moduled attributes...
    // properties goes along.
    constructor(quizQuestion, quizAnswer, userAnswer,) {
        super();
        this._quizQuestion = quizQuestion;
        this._quizAnswer = quizAnswer;
        this._userAnswer = userAnswer;
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

