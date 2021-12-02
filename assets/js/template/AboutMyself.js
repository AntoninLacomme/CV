const template = document.createElement ("template");
import tools from "../tools.js";

class AboutMyself extends HTMLElement {

    constructor () {
        super ();
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        tools.importHTML ("./assets/js/template/html/aboutMyself.html", (html) => {
            template.innerHTML = html;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            
            this.shadowRoot.querySelectorAll ("a").forEach (elem => elem.target = "_blank");
            this.shadowRoot.querySelectorAll ("img").forEach (image => image.src = "./assets/js/template/icons/" + image.src.slice (image.src.lastIndexOf ("/")+1));
        })
    }
}

customElements.define("about-myself", AboutMyself);