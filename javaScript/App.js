class App extends Domer {

  // aboutMalmoQuiz = new Quiz("Please answer the questions below about Malmö")
  // aboutMalmoQuiz.addQuestion(new Question("Vad heter isstadion i Malmö", "Malmö Arena"));
  // myQuestions = new Quiz().aboutYouQuiz();
  // console.log(myQuestions);
  
  // console.log("Here: ", myQuestions);
  
  // videoGamesQuiz = new Quiz()

  // programmingQuiz = new Quiz()

  // createQuiz = new Quiz()
  missingPage = new MissingPage();

  topNav = new TopNav();

  home = new Home();

  
  listOfStuff = [];

  constructor(){
    super()

    this.quizInstance = new Quiz
    (["What is 'Turning Torso'?", "What can you find on 'Amiralsgatan 20'?", "How many wakeboarding-parks is there in Malmö?"]);
    
    console.log("Here is the quiz instance: ", this.quizInstance);
  }

  submitButton(){ // Pushes new content into array
    this.listOfStuff.push(this.inputName);
    console.log(this.listOfStuff);
    
  }
  removeContent(){ // Pops out (remove) content from array
    this.listOfStuff.pop(this.inputName);
    console.log(this.listOfStuff);
  }
  renderContent(){ //Prints out content in DOM-format
    let printOut = "";
    for (let stuff of this.listOfStuff){
      printOut += ` 
      <div>${stuff}</div>
      
      `
    } 
    return printOut;
  }

// The render below converts js-codes into html. This (app) is still a js-file.
  render(html, route) {  
    return html`
      <section>

          ${this.topNav} <!-- This is the navigationbar at the top -->

          ${route('/') ? this.home : ''} <!-- Takes user to home page with Home button in nav -->
          ${route('/index.html') ? this.home : ''} <!-- Needed when open live server for the first time -->
          ${route('/aboutMalmoQuiz') ? this.aboutMalmoQuiz : '' }
          ${route('/videoGamesQuiz') ? this.videoGamesQuiz : ''}
          ${route('/programmingQuiz') ? this.programmingQuiz : ''}
          ${route('/createQuiz') ? this.createQuiz : ''}
          ${route(404) ? this.missingPage : ''}
          <!-- ${this.quizInstance} -->
          <br>

          Add your name: <input type="text" placeholder="Write your name" bind="inputName"><br>
          <button click="submitButton">Submit</button>
          <br><br>
          <button click="removeContent"> Remove </button>
          ${this.renderContent()}

              <!-- Below div-tag shows a number of objects created by constructor above.
              <div id="aboutMalmoQuizDiv" bind="aboutMalmoQuiz">
              ${this.quizInstance.questions[0]}
                <input type="text">
                <br><br>
              ${this.quizInstance.questions[1]}
                <input type="text">
                <br><br>
              ${this.quizInstance.questions[2]}
                <input type="text">
              </div> -->

            <!-- Below row, uses addExtraQuestion, a function from class Quiz, to push in additional question -->
            <!-- See console.log as index #4 -->
            ${this.quizInstance.addExtraQuestion("How are you today?")}
                          
            <h1>${this.quizInstance.subject}</h1>

            <div id="divFooter">
              <footer id="footer"> 2019 SuperQuiz </footer>
            </div>
      </section>
    `
  }
}
new App()