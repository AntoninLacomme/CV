const template = document.createElement ("template");
template.innerHTML = `
<style>
    #main {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
    }

    .container {
        min-width: 30%;
    }

    span.icon > img {
        width: 32px;
        margin-right: 1em;
    }

    ul {
        list-style-type: none;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-content: center;
        justify-content: flex-start;
    }

    h3 {
        display: flex;
    }
</style>

<div id="main">
    <div class="container">
        <div>
            <h3><span class="icon"><img src="icon-javascript.svg"></span>Javascript</h3>
            <ul>
                <li><span class="icon"><img src="icon-nodejs.svg"></span>NodeJS</li>
                <li><span class="icon"><img src="icon-angular.svg"></span>Angular</li>
                <li><span class="icon"><img src="icon-react.svg"></span>ReactJS</li>
                <li><span class="icon"><img src="icon-vuejs.svg"></span>VueJS</li>
                <li><span class="icon"><img src="icon-socketio.svg"></span>SocketIO</li>
                <li><span class="icon"><img src="icon-d3js.svg"></span>D3JS</li>
                <li><span class="icon"><img src="icon-plotly.svg"></span>PlotlyJS</li>
                <li><span class="icon"><img src="icon-vis.png"></span>VisJS</li>
                <li><span class="icon"><img src="icon-babylon.png"></span>BabylonJS</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div>
            <h3><span class="icon"><img src="icon-java.svg"></span>Java</h3>
            <ul>
                <li><span class="icon"><img src="icon-grails.svg"></span>Grails</li>
                <li><span class="icon"><img src="icon-kotlin.svg"></span>Kotlin</li>
                <li><span class="icon"><img src="icon-spring.svg"></span>Spring</li>
                <li><span class="icon"><img src="icon-socketio.svg"></span>SoketIO</li>
                <li><span class="icon"><img src="icon-java.svg"></span>JavaFX</li>
            </ul>
        </div>

        <div><h3><span class="icon"><img src="icon-html5.svg"></span>HTML / CSS</h3></div>
        <div><h3><span class="icon"><img src="icon-php.svg"></span>PHP</h3></div>
        <div><h3><span class="icon"><img src="icon-csharp.svg"></span>C#</h3></div>
    </div>
    <div class="container">
        <div>
            <h3>Base de données relationnelles</h3>
            <ul>
                <li><span class="icon"><img src="icon-oracle.svg"></span>Oracle</li>
                <li><span class="icon"><img src="icon-mysql.svg"></span>MySql</li>
                <li><span class="icon"><img src="icon-sqlserver.svg"></span>SQLServer</li>
            </ul>
        </div>
        <div>
            <h3>Base de données NoSQL</h3>
            <ul>
                <li><span class="icon"><img src="icon-mongodb.svg"></span>MongoDB</li>
                <li><span class="icon"><img src="icon-oracle.svg"></span>Oracle NoSQL</li>
            </ul>
        </div>
        <div>
            <h3>Framework</h3>
            <ul>
                <li><span class="icon"><img src="icon-hadoop.svg"></span>Hadoop</li>
            </ul>
        </div>
    </div>
</div>
`

class PersonnalCompetence extends HTMLElement {
    constructor () {
        super ();
        this.checked = false;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelectorAll ("img").forEach ((image) => {
            image.src = "./assets/js/template/icons/" + image.src.slice (image.src.lastIndexOf ("/")+1);
        })
    }
}


customElements.define("personnal-competence", PersonnalCompetence);