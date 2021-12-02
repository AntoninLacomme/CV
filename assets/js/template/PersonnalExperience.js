const template = document.createElement ("template");
import tools from "../tools.js";

class PersonnalExperience extends HTMLElement {
    constructor () {
        super ();
        this.checked = true;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        tools.importHTML ("./assets/js/template/html/personnalExperience.html", (html) => {
            template.innerHTML = html;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        });
    }
}


customElements.define("personnal-experience", PersonnalExperience);