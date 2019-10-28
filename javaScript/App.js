class App extends Domer {
  index = new Index()
  aboutMalmoQuiz = new AboutMalmoQuiz()
  videoGamesQuiz = new VideoGamesQuiz()
  programmingQuiz = new ProgrammingQuiz()
  createQuiz = new CreateQuiz()

  render(html, route) {  
    return html`
      <section>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          
        </nav>
        <section>
          ${route('/index') ? this.index : ''}
          ${route('/javaScript/aboutMalmoQuiz') ? this.aboutMalmoQuiz : ''}
          ${route('/javaScript//videoGamesQuiz') ? this.videoGamesQuiz : ''}
          ${route('/javaScript//programmingQuiz') ? this.programmingQuiz : ''}
          ${route('/javaScript//createQuiz') ? this.createQuiz : ''}
          ${route(404) ? this.missingPage : ''}

        </section>

        <footer id="footer">&copy; 2019 SuperQuiz</footer>
      </section>
    `
  }
}

new App()


// ----------- OLD HTML TEXT FROM ABOUTMALMO-QUIZ ----------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="style.css">
//     <title>SuperQuiz</title>
// </head>
// <body>
//     <!-- This is About Malmo-page -->

//     <div class="topNav"> <!-- Creates a navigationBar in the top -->
//         <a href="/index.html">Home</a>
//         <!-- <a class="active" href="/aboutMalmo.html"></a> Dont need, removed on the other html files -->
//         <div class="dropdown">
//             <button class="dropbtn">Quiz ...</button>
//             <div class="dropdown-content">
//                 <a href="aboutMalmo.html">About Malmö</a>
//                 <a href="videoGames.html">Video games</a>
//                 <a href="programming.html">Programming</a>
//             </div>
//         </div>
//         <a href="/create.html">Create your own SuperQuiz</a>
//     </div>
//     <h4>About Malmö</h4>
//     <h6>This Quiz contains three questions about Malmö, <br> a beautiful city in the south region of Sweden. <br> Good luck!</h6>
//     <button id="startAboutMalmoQuiz" type="button">Start "About Malmö" Quiz</button>
//     <!-- 
//     <ul id="malmoQandA">
//         <li>Q1: What is "Folkets park" in Malmö?</li>
//         <li>Q2: What is "Turning Torso"?</li>
//         <li>Q3: How many people live in the city of Malmo?</li>
//     </ul>
//     -->
//     <script src="/javaScript/main.js"></script>
//     <script src="/javaScript/aboutMalmoQuiz.js"></script>
//     </body>
//     </html>