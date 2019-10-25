// Below contains quizes
class Quiz{
_createQuestion  = "";
_createAnswer    = "";
_madeQuestion    = "";
_madeAnswer    = "";

constructor(){
    this._createQuestion = createQuestion;
    this._createAnswer = createAnswer;
}

}

// Above contains quizes


class AboutMalmoQuizClass extends Quiz{
    constructor(){
        super()
        this._createQuestion = questionOne(new Quiz);
        this._createQuestion = questionTwo(new Quiz);
        this._createQuestion = questionThree(new Quiz);
    }
}

// Below contains functions for buttons
function showAboutMalmoQuiz(){
    if (malmoQuestions.style.display === "none") {
    malmoQuestions.style.display = "block";
  } else {
    malmoQuestions.style.display = "none";
  }
}
// Above contains functions for buttons

