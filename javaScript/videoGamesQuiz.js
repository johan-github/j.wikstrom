class VideoGamesQuiz extends Domer{ 

    constructor(){
        super()

    }

    render(html){
        return html`
    <section>
        <h4>Video Games</h4>
        <h6>This Quiz contains three questions about Video Games, <br>Good luck!</h6>
        <button id="startVideoGames" type="button">Start "Video Games" Quiz</button>
    </section>
    `
    }
}