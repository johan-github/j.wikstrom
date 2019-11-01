class VideoGamesQuiz extends Domer{
    
    
    constructor(){
        super()
    
    
        }

    render(html){
        return html`
        <section>
            <br>
            <h1>Video Games</h1>
            Q1: Who saves princess Zelda? <input id="q1VideoGames"><br><br>
            Q1: How many consoles does PlayStation has? <input id="q2VideoGames"><br><br>
            Q1: What company is behind X-box? <input id="q3VideoGames"><br><br>
            <button id="submitVideoGames">Submit</button>
            <button id="resetVideoGames">Reset</button>

            <br>

        </section>
        
        `
    }

}
