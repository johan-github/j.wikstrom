class AboutMalmoQuiz extends Domer{
    
    //topic = "";
    _correctAnswer = "tower";
    _question = "";
    //_correct = false;
    _userAnswer;
    
    constructor(userAnswer){ // question, correctAnswer, userAnswer, topic 
    super()
    // this._correctAnswer = correctAnswer;
    // this._question = question;
    // this._topic = topic;
    this._userAnswer = userAnswer;
    }

    //  if (((this.userAnswer).value) == this._correctAnswer){
    submitMalmoButton() {
        // return this._userAnswer === this._correctAnswer;
        if (((this._userAnswer).value) === this._correctAnswer){
            console.log("Correct answer!");
            }
        else{
            console.log("Too bad, that is incorrect. Correct answer is 'tower'");
            }
    }


    emptyInputField(){ // This works. DO NOT CHANGE!
        this._userAnswer = "";
    }


    render(html){
        return html`
        <section>
            <br>
            <h1>About Malmö</h1>
            
            <h4>What is "Turning Torso" in Malmö?</h4>
            <input type="text" bind="_userAnswer"><br><br> <!-- id="q1malmo" -->
            
            <button click="submitMalmoButton" type="button"> Submit answer </button>
            <button click="emptyInputField" type="button"> Empty input field </button> <!--  -->
            <h4 id="showRightAnswer">Your answer: ${this._userAnswer} <br> Correct answer: ${this._correctAnswer}</h4>
        </section>
        
        `
    }

}
/*
    question1 = new Question("What is TT?", "House", "About Malmö");

    onClickCheckAnswer() {
        if (this.correctAnswer === this.userAnswer){
        console.log(correctAnswer);
            this.correct = true;
        }
        else {
        console.log(false);
        this.correct = false;
        }
    }

    getTopic(){
        return this.topic;
    }
    getCorrect(){
        return this.correct;
    }

*/