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
            <h3><span class="icon"><img src="./js/template/icons/icon-javascript.svg"></span>Javascript</h3>
            <ul>
                <li><span class="icon"><img src="./js/template/icons/icon-nodejs.svg"></span>NodeJS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-angular.svg"></span>Angular</li>
                <li><span class="icon"><img src="./js/template/icons/icon-react.svg"></span>ReactJS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-vuejs.svg"></span>VueJS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-socketio.svg"></span>SocketIO</li>
                <li><span class="icon"><img src="./js/template/icons/icon-d3js.svg"></span>D3JS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-plotly.svg"></span>PlotlyJS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-vis.png"></span>VisJS</li>
                <li><span class="icon"><img src="./js/template/icons/icon-babylon.png"></span>BabylonJS</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div>
            <h3><span class="icon"><img src="./js/template/icons/icon-java.svg"></span>Java</h3>
            <ul>
                <li><span class="icon"><img src="./js/template/icons/icon-grails.svg"></span>Grails</li>
                <li><span class="icon"><img src="./js/template/icons/icon-kotlin.svg"></span>Kotlin</li>
                <li><span class="icon"><img src="./js/template/icons/icon-spring.svg"></span>Spring</li>
                <li><span class="icon"><img src="./js/template/icons/icon-socketio.svg"></span>SoketIO</li>
                <li><span class="icon"><img src="./js/template/icons/icon-java.svg"></span>JavaFX</li>
            </ul>
        </div>

        <div><h3><span class="icon"><img src="./js/template/icons/icon-html5.svg"></span>HTML / CSS</h3></div>
        <div><h3><span class="icon"><img src="./js/template/icons/icon-php.svg"></span>PHP</h3></div>
        <div><h3><span class="icon"><img src="./js/template/icons/icon-csharp.svg"></span>C#</h3></div>
    </div>
    <div class="container">
        <div>
            <h3>Base de données relationnelles</h3>
            <ul>
                <li><span class="icon"><img src="./js/template/icons/icon-oracle.svg"></span>Oracle</li>
                <li><span class="icon"><img src="./js/template/icons/icon-mysql.svg"></span>MySql</li>
                <li><span class="icon"><img src="./js/template/icons/icon-sqlserver.svg"></span>SQLServer</li>
            </ul>
        </div>
        <div>
            <h3>Base de données NoSQL</h3>
            <ul>
                <li><span class="icon"><img src="./js/template/icons/icon-mongodb.svg"></span>MongoDB</li>
                <li><span class="icon"><img src="./js/template/icons/icon-oracle.svg"></span>Oracle NoSQL</li>
            </ul>
        </div>
        <div>
            <h3>Framework</h3>
            <ul>
                <li><span class="icon"><img src="./js/template/icons/icon-hadoop.svg"></span>Hadoop</li>
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
        
    }
}


customElements.define("personnal-competence", PersonnalCompetence);