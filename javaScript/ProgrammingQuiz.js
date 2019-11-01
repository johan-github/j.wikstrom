class ProgrammingQuiz extends Domer{
    
    
    constructor(){
        super()
    
    
        }

    render(html){
        return html`
        <section>
            <br>
            <h1>Programming</h1>
            Q1: What an array? <input id="q1programing"><br><br>
            Q1: What is Java? <input id="q2programming"><br><br>
            Q1: When did Java first occur? <input id="q3programming"><br><br>
            <button id="submitProgramming">Submit</button>
            <button id="resetProgramming">Reset</button>

            
            <br>

        </section>
        
        `
    }

}
