class AboutMalmoQuiz extends Domer{

    constructor(){
        super()

        // this.button.onclick = this.showAboutMalmoQuiz.bind(this)
        /* this.button.onclick = () => { this.showAboutMalmoQuiz() } */
    }

    startAboutMalmoQuiz(){
        
    }

    render(html){
        return html`
        <section>

            <h4>About Malmö</h4>
            <h6>This Quiz contains three questions about Malmö, <br> a beautiful city in the south region of Sweden. <br> Good luck!</h6>
            <br><br>
            <button id="startAboutMalmoQuiz" onclick="startAboutMalmoQuiz()" type="button">Start "About Malmö" Quiz</button>
            
        </section>
        <br>

        <div id="malmoQuiz">
          Question 1: How many people live in Malmö city?
          Question 2: What is "Turning Torso"?
          Question 3: How far is it to Stockholm, the capital of Sweden, from Malmö?
        </div>
    `
    }
// function myFunction() {
//    let hidingQuestions = document.getElementById("myDIV");
//     if (hidingQuestions.style.display === 'none') {
//         hidingQuestions.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
}