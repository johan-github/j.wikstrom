class TopNav extends Domer{

    render(html){
        return html`
<section>
    <div class="topNav"> <!-- Creates a navigationBar at the top -->
        <a class="active" href="/">Home</a>
            <div class="dropdown"> <!-- Creates a drop-down folder in the nav-bar -->
                <button class="dropbtn">Quiz ...</button>
                <div class="dropdown-content">
                <!-- Three rows below: link to content through Drop-Down-->
                <a href="/aboutMalmoQuiz">About Malmö</a>
                <a href="/videoGamesQuiz">Video games</a>
                <a href="/programmingQuiz">Programming</a>
                </div>
            </div>
        <a href="/createQuiz">Create your own SuperQuiz</a> <!-- Link to "create-your-own-SuperQuiz" -->
    </div>
</section>
`
}

}