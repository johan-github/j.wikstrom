class ProgrammingQuiz extends Domer{

    constructor(){
        super()
    }

    render(html){
        return html`
    <section>
        <h4>Programming</h4>
        <h6>This Quiz contains three questions about Programming, <br>Good luck!</h6>
        <button id="startProgramming" type="button">Start "Programming" Quiz</button>
    </section>
    
        `
    }
}