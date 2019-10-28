class App extends Domer {
  // index = new Index()
  aboutMalmoQuiz = new AboutMalmoQuiz()
  videoGamesQuiz = new VideoGamesQuiz()
  programmingQuiz = new ProgrammingQuiz()
  createQuiz = new CreateQuiz()

  render(html, route) {  
    return html`
      <section id="App">
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          
        </nav>
        <section>
          ${route('/') ? this.index : ''}
          ${route('/aboutMalmoQuiz') ? this.aboutMalmoQuiz : ''}
          ${route('/videoGamesQuiz') ? this.videoGamesQuiz : ''}
          ${route('/programmingQuiz') ? this.programmingQuiz : ''}
          ${route('/createQuiz') ? this.createQuiz : ''}
          ${route(404) ? this.missingPage : ''}

        </section>

        <footer>&copy; 2019 Domer Routing</footer>
      </section>
    `
  }
}

new App()