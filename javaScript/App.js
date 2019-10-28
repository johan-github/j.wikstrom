class App extends Domer {

  aboutMalmoQuiz = new AboutMalmoQuiz()
  videoGamesQuiz = new VideoGamesQuiz()
  programmingQuiz = new ProgrammingQuiz()
  createQuiz = new CreateQuiz()
  topNav = new TopNav()
  home = new Home()

  constructor(){
    super()
  }

  render(html, route) {  
    return html`
      <section>

          ${this.topNav}

          ${route('/home') ? this.home : ''}
          ${route('/aboutMalmoQuiz') ? this.aboutMalmoQuiz : ''}
          ${route('/videoGamesQuiz') ? this.videoGamesQuiz : ''}
          ${route('/programmingQuiz') ? this.programmingQuiz : ''}
          ${route('/createQuiz') ? this.createQuiz : ''}
          ${route(404) ? this.missingPage : ''}

          <footer id="footer">&copy; 2019 SuperQuiz </footer>
        
      </section>
    `
  }
}

new App()