const template = document.createElement ("template");
template.innerHTML = `
<style>
</style>

`
class PersonnalExperience extends HTMLElement {
    constructor () {
        super ();
        this.checked = true;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define("personnal-experience", PersonnalExperience);