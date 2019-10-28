class AboutMalmoQuiz extends Main{

    constructor(){
        super()


        this.button.onclick = this.showAboutMalmoQuiz.bind(this)
        /* this.button.onclick = () => { this.showAboutMalmoQuiz() } */
    
    }

// <div class="topNav"> <!-- Creates a navigationBar in the top -->
//         <a href="/index.html">Home</a>
//         <!-- <a class="active" href="/aboutMalmo.html"></a> Dont need, removed on the other html files -->
//         <div class="dropdown">
//             <button class="dropbtn">Quiz ...</button>
//             <div class="dropdown-content">
//                 <a href="aboutMalmo.html">About Malmö</a>
//                 <a href="videoGames.html">Video games</a>
//                 <a href="programming.html">Programming</a>
//             </div>
//         </div>
//         <a href="/create.html">Create your own SuperQuiz</a>
//     </div>
    
    render(html){
        return html`
    <h4>About Malmö</h4>
    <h6>This Quiz contains three questions about Malmö, <br> a beautiful city in the south region of Sweden. <br> Good luck!</h6>
    <button id="startAboutMalmoQuiz" type="button">Start "About Malmö" Quiz</button>
    <!-- 
    <ul id="malmoQandA">
        <li>Q1: What is "Folkets park" in Malmö?</li>
        <li>Q2: What is "Turning Torso"?</li>
        <li>Q3: How many people live in the city of Malmo?</li>
    </ul>
    -->
    <script src="/javaScript/main.js"></script>
    <script src="/javaScript/aboutMalmoQuiz.js"></script>
    </body>
    </html>
    `
    }

    /*
    Q1: What is "Folkets park" in Malmö?
    Q2: What is "Turning Torso"?
    Q3: How many people live in the city of Malmo?
    SINGEL PAGE APP. = EN ENDA HTMLFIL, LADDAS INTE OM. INDEX TEX.. JS TAR RESTEN.
    SRC = SOURCE
    

function myFunction() {
   let hidingQuestions = document.getElementById("myDIV");
    if (hidingQuestions.style.display === 'none') {
        hidingQuestions.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


    */
   }


