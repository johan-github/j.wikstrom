class App extends Domer {

  // OBS! THIS PROJECT USES PUBLIC ATTRIBUTES. THERE IS A POSSIBILITY TO USE PRIVATE ATTRIBUTES BY...
  // WRITING UNDERSCORE (_) BEFORE THE ATTRIBUTE-NAME. IF SO, WE GET (CALL ON) THE ATTRIBUTES BY...
  // PRINTING "THIS_VARIABLENAME = VARIABLENAME" IN THE REQUESTED CLASS CONSTRUCTOR.

  aboutMalmoQuiz = new AboutMalmoQuiz()
  programmingQuiz = new ProgrammingQuiz()
  videoGamesQuiz = new VideoGamesQuiz()
  createQuiz = new CreateQuiz()
  pageMissing = new MissingPage();
  topNav = new TopNav();
  home = new Home();

  listOfStuff = []; // Empty array that can be filled with values.

  constructor(){
    super()
    
    // quizInstance is filled with the content from class Quiz. Quiz requires three elements.
    this.quizInstance = new Quiz
    (["What is 'Turning Torso'?", "What can you find on 'Amiralsgatan 20'?", "How many wakeboarding-parks is there in Malmö?"]);
    console.log("Here is the quiz instance: ", this.quizInstance); // shows the quiz instance.
  }

  submitButton(){ // Function that pushes new content into array, bound to Submit-button
    this.listOfStuff.push(this.inputName);
    console.log(this.listOfStuff);
  }

  removeContent(){ // Pops out (remove) content from array, bound to Remove-button
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

          <br>






          <!-- Below is working properly
          Add something to the list: <input type="text" placeholder="Write something" bind="inputName"><br><br>
          <button click="submitButton">Submit</button>
          <br><br>
          <button click="removeContent"> Remove one item per click </button>
          ${this.renderContent()} ///// Function that render content called "stuff" (see above)
          -->

            <!-- Below row, uses addExtraQuestion, a function from class Quiz, to push in additional question -->
            ${this.quizInstance.addExtraQuestion("How are you today?")} <!-- See console.log as index #4 -->
                          
            <h1>${this.quizInstance.subject}</h1>
            
            <br>

            <div id="divFooter">
              <footer id="footer"> 2019 SuperQuiz </footer>
            </div>
      </section>
    `
  }
}
new App()