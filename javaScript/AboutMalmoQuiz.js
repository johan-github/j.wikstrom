class AboutMalmoQuiz extends Domer{
    
    
    constructor(){
    super()


    }


    
    render(html){
        return html`
        <section>
            <br>
            <h1>About Malmö</h1>
            Q1: What is "Turning Torso" in Malmö? <input id="q1malmo"><br><br>
            Q1: Ho many people live in Malmö? <input id="q2malmo"><br><br>
            Q1: What danish capital is close to Malmö? <input id="q3malmo"><br><br>
            <button id="submitMalmo">Submit</button>
            <button id="resetMalmo">Reset</button>

            
            <br>

        </section>
        
        `
    }

}
