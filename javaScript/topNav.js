class TopNav extends Domer{

    render(html){
        return html`
<section>
    <div class="topNav"> <!-- Creates a navigationBar at the top -->
        <a class="active" href="/">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Quiz ...</button>
                <div class="dropdown-content">
                <!-- Three rows below: link to content -->
                <a href="/aboutMalmoQuiz">About Malmö</a>
                <a href="/videoGamesQuiz">Video games</a>
                <a href="/programmingQuiz">Programming</a>
                </div>
            </div>
        <a href="/createQuiz">Create your own SuperQuiz</a>
    </div>
</section>
`
}

}