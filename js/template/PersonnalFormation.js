const template = document.createElement ("template");
template.innerHTML = `
<style>
    #main {
        display: flex;
        flex-direction: column;
    }

    .formation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .year {

    }

    .diplome {

    }
</style>

<div id="main">
    <div class="formation">
        <div class="year">
            2021-2022
        </div>
        <div class="diplome">
            Master Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE) Université Nice Sophia Antipolis        
        </div>
    </div>
    
    <div class="formation">
        <div class="year">
            2020-2021
        </div>
        <div class="diplome">
            Master MIAGE MBDS Université Nice Sophia Antipolis        
        </div>
    </div>

    <div class="formation">
        <div class="year">
            2019-2020
        </div>
        <div class="diplome">
            Licence 3 Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE) Université Nice Sophia Antipolis
        </div>
    </div>

    <div class="formation">
        <div class="year">
            2017-2019
        </div>
        <div class="diplome">
            BTS Service Informatique aux Organisations (SIO) spécialité Solution Logicielle et Application Métier (SLAM)
        </div>
    </div>
</div>
`

class PersonnalFormation extends HTMLElement {
    constructor () {
        super ();
        this.checked = true;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define("personnal-formation", PersonnalFormation);