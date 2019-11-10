class App extends Domer {

  aboutMalmoQuiz = new AboutMalmoQuiz()
  programmingQuiz = new ProgrammingQuiz()
  videoGamesQuiz = new VideoGamesQuiz()
  createQuiz = new CreateQuiz()
  topNav = new TopNav();
  home = new Home();

  constructor() {
    super();
  }

// The render below makes it possible to write in html-format. This (App.js) is still a js-file.
  render(html, route) {  
    return html`
      <section>

          ${this.topNav} <!-- This is the navigationbar at the top, always running -->

          ${route('/') ? this.home : ''} <!-- Takes user to home page with "Home"-button in topnav -->
          ${route('/index.html') ? this.home : ''} <!-- Needed when open live server for the first time -->
          ${route('/aboutMalmoQuiz') ? this.aboutMalmoQuiz : '' }
          ${route('/videoGamesQuiz') ? this.videoGamesQuiz : ''} <!-- Not in use right now -->
          ${route('/programmingQuiz') ? this.programmingQuiz : ''} <!-- Not in use right now -->
          ${route('/createQuiz') ? this.createQuiz : ''} 
          
            <br>

            <div id="divFooter">
              <footer id="footer"> 2019 SuperQuiz </footer>
            </div>
      </section>
    `
  }
}
new App()
