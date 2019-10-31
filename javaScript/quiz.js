// THIS CLASS REPRESENT A LIST OF QUESTIONS. ALSO INCLUDE A SUBJECT-SELECTION AND ADDING NEW QUESTION INTO LIST.

class Quiz extends Domer{
    
    // questions = [];
    // subject;
    // addQuestion;
    // Might not need above variables...

    // These props are inhereted from the instance that is created in app.js
    constructor(questions, subject, extraQuestion){
        super()
        this.questions = questions;
        this.subject = subject;
        this.extraQuestion = extraQuestion;
        // Pushes an additional question which is inherited from app.js as we create a new quiz
        this.addExtraQuestion(this.extraQuestion);
        // this.removeExtraQuestion(this.extraQuestion);
    }

    // This array pushes a question to the defined quiz
    addExtraQuestion(extraQuestion){
        this.questions.push(extraQuestion);
    }
    // removeExtraQuestion(extraQuestion){
        // this.extraQuestion.pop(extraQuestion);
    // }

    getQuestions() {
        // console.log(this.questions);
        

        // return [qOld, qLiving, qName];
    }
    
    //Beräkna slutresultat och färga svaren
    getResult(){
        let score = 0;
        // run through list of questions
        for (let question of this._questions){
            //Kolla om ordet har rätt svar...
            let isCorrectAnswer = question.isCorrectAnswer();

            // If answer is Correct, raise score by ONE
            if (isCorrectAnswer){
                points++;
            }
        }
        return points;
    }
}