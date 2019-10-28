class Home extends Domer{
    constructor(){
        super()
    }
    render(html){
        return html`
        <section>
            <div>
                <h1 id="firstText"> Welcome to </h1>
                <img src="/images/superQuiz-logo.jpg" id="superQuiz-logo">
                <h4 id="secondText"> Please select a quiz at the top. Choose one of the pre-made quizes or create your own. </h4>
            </div>
        </section>
        `
    }
}