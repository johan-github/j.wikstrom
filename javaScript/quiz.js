class Quiz extends Domer{
    
    questions = [];
    subject;
    addQuestion;

    constructor(questions, subject, addQuestion){
        super()
        this.questions = questions;
        this.subject = subject;
        this.addQuestion = addQuestion;
    }
    // function below takes array and pushes in new question \\
    newFunction(){
        this.questions.push = this.addQuestion;
    }
    
    
    render(html){
        return html`
        <section>
            <h3> What do you know about Malmö?</h3>

        
            
        </section>
        <br>
    `
    }
    
}