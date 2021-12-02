const template = document.createElement ("template");
import tools from "../tools.js";

class PersonnalCompetence extends HTMLElement {
    constructor () {
        super ();
        this.checked = false;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        tools.importHTML ("./assets/js/template/html/personnalCompetence.html", (html) => {
            template.innerHTML = html;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        
            this.shadowRoot.querySelectorAll ("img").forEach ((image) => {
                image.src = "./assets/js/template/icons/" + image.src.slice (image.src.lastIndexOf ("/")+1);
            });   
        });
    }
}


customElements.define("personnal-competence", PersonnalCompetence);