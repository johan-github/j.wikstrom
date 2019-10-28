class AboutMalmoQuiz extends Domer{

    constructor(){
        super()

        // this.button.onclick = this.showAboutMalmoQuiz.bind(this)
        /* this.button.onclick = () => { this.showAboutMalmoQuiz() } */
    }

    render(html){
        return html`
        <section>
            <h4>About Malmö</h4>
            <h6>This Quiz contains three questions about Malmö, <br> a beautiful city in the south region of Sweden. <br> Good luck!</h6>
            <button id="startAboutMalmoQuiz" type="button">Start "About Malmö" Quiz</button>
        </section>
    `
    }
    // }

// function myFunction() {
//    let hidingQuestions = document.getElementById("myDIV");
//     if (hidingQuestions.style.display === 'none') {
//         hidingQuestions.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
}