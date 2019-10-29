class App extends Domer {

  aboutMalmoQuiz = new Quiz("Please answer the questions below about Malmö")
  // aboutMalmoQuiz.addQuestion(new Question("Vad heter isstadion i Malmö", "Malmö Arena"));

  // videoGamesQuiz = new Quiz()

  // programmingQuiz = new Quiz()

  // createQuiz = new Quiz()

  topNav = new TopNav()

  home = new Home()

  constructor(){
    super()
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

            <div id="divFooter">
              <footer id="footer"> 2019 SuperQuiz </footer>
            </div>
      </section>
    `
  }
}
new App()