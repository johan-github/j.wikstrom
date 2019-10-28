class TopNav extends Domer{

    constructor(){
        super()
    }

    render(html){
        return html`
<section>
    <div class="topNav"> <!-- Creates a navigationBar at the top -->
        <a class="active" href="/">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Quiz ...</button>
                <div class="dropdown-content">
                <!-- Three rows below: link to page + page-name -->
                <a href="/aboutMalmoQuiz">About Malmö</a>
                <a href="/videoGamesQuiz">Video games</a>
                <a href="/programmingQuiz">Programming</a>
                </div>
            </div>
        <a href="/Create">Create your own SuperQuiz</a>
    </div>
</section>
`
}


}