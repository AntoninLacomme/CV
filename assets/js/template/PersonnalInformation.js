const template = document.createElement ("template");
import tools from "../tools.js";

class PersonnalInformation extends HTMLElement {
    constructor () {
        super ();
        this.checked = true;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        tools.importHTML ("./assets/js/template/html/personnalInformation.html", (html) => {
            template.innerHTML = html;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        });
    }
}


customElements.define("personnal-information", PersonnalInformation);