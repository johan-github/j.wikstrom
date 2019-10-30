class App extends Domer {

  // aboutMalmoQuiz = new Quiz("Please answer the questions below about Malmö")
  // aboutMalmoQuiz.addQuestion(new Question("Vad heter isstadion i Malmö", "Malmö Arena"));
  // myQuestions = new Quiz().aboutYouQuiz();
  // console.log(myQuestions);
  
  // console.log("Here: ", myQuestions);
  
  // videoGamesQuiz = new Quiz()

  // programmingQuiz = new Quiz()

  // createQuiz = new Quiz()

  topNav = new TopNav()

  home = new Home()
  
  quizInstance = ""
  constructor(){
    super()
    this.quizInstance = new Quiz
    (["What is 'Turning Torso'?", "What can you find on 'Amiralsgatan 20'?", "How many wakeboarding-parks is there in Malmö?"],
      "personal stuff","When do you wake up in the morning?");
    console.log("Here is the quiz instance: ", this.quizInstance);
    
  }

  render(html, route) {  
    return html`
      <section>

          ${this.topNav}

          ${route('/') ? this.home : ''} <!-- Takes user to home page with Home button in nav -->
          ${route('/index.html') ? this.home : ''} <!-- Needed when open live server for the first time -->
          ${route('/aboutMalmoQuiz') ? this.aboutMalmoQuiz : ''}
          ${route('/videoGamesQuiz') ? this.videoGamesQuiz : ''}
          ${route('/programmingQuiz') ? this.programmingQuiz : ''}
          ${route('/createQuiz') ? this.createQuiz : ''}
          ${route(404) ? this.missingPage : ''}
          <!-- ${this.quizInstance} -->
          <br>
          <div>
            <div>
              ${this.quizInstance.questions[0]}
              <input>
            </div>
            <br>
            <div>
              ${this.quizInstance.questions[1]}
              <input>
            </div>
            <br>
            <div>
              ${this.quizInstance.questions[2]}
              <input>
            </div>
            <br>
            <div>
              ${this.quizInstance.questions[3]}
              <input>
            </div>
            <br>
            <div>
              ${this.quizInstance.questions[4]}
              <input>
            </div>
            <br>
            <div>
            ${this.quizInstance.addExtraQuestion("djaekjfslkefj")}
              ${this.quizInstance.questions[5]}
              <input>
            </div>
          </div>
          <h1>${this.quizInstance.subject}</h1>

            <div id="divFooter">
              <footer id="footer"> 2019 SuperQuiz </footer>
            </div>
      </section>
    `
  }
}
new App()