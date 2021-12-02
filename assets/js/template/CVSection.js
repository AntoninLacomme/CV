const template = document.createElement ("template");
import tools from "../tools.js";

const path = "./assets/js/template/";

class CVSection extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow ({mode: "open"});
    }

    connectedCallback () {
        if (this.getAttribute ("target")) {
            tools.importHTML (`${path}html/${this.getAttribute ("target")}`, (html) => {
                template.innerHTML = html;
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                
                this.shadowRoot.querySelectorAll ("a").forEach (elem => elem.target = "_blank");
                this.shadowRoot.querySelectorAll ("img").forEach (image => image.src = `.${path}icons/${image.src.slice (image.src.lastIndexOf ("/")+1)}`);
            });
        } else {
            throw "no parameter target found !"
        }
    }
}


customElements.define("cv-section", CVSection);