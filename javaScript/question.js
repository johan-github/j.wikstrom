// THIS CLASS REPRESENT A QUESTION, AN ANSWER AND CHECKING IF ANSWER IS CORRECT OR NOT

class Question extends Domer{ 

    question = "";
    userAnswer = "";
    correctAnswer = "";

    constructor(question, userAnswer, correctAnswer){
        super();
        this.question = question;
        this.userAnswer = userAnswer;
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(){
        return this.answer === this.correctAnswer;
    }

    render(html){
        return html`
    <section>
        <!-- The Question. Invisable until "get" by ID -->
        <h3 id="theVeryQuestion"></h3>

        <!-- Input-box for user, bound to variable "userAnswer". Bind to isCorrectAnswer ?? -->
        <input type="text" id="theVeryAnswer" bind="userAnswer" placeholder="Enter your answer">
    </section>
    `
    }
        
}