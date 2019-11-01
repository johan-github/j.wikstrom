// THIS CLASS REPRESENT A QUESTION, AN ANSWER AND CHECKING IF ANSWER IS CORRECT OR NOT

class Question extends Domer{ 

    // question = "";
    // userAnswer = "";
    // correctAnswer = "";

    constructor(question, userAnswer, correctAnswer){
        super();
        // The three rows below is not needed right now.
        // this.question = question;
        // this.userAnswer = userAnswer;
        // this.correctAnswer = correctAnswer;
    }

    // isCorrectAnswer(){ // Planed to use this as a function for future possibility, to check if a answer is true/false.
    //     return this.userAnswer.value === this.correctAnswer; //Bolean checks true/false
    // }

    render(html){
        return html`
    <section>
        <!-- theVeryQuestion below. Invisable until "get" by ID -->
        <!-- <h3 id="theVeryQuestion"></h3> -->

        <!-- Input-box for user, bound to variable "userAnswer". Bind to isCorrectAnswer ?? -->
        <!-- <input type="text" id="theVeryAnswer" bind="userAnswer" placeholder="Enter your answer"> -->
    </section>
    `
    }
}