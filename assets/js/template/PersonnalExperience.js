const template = document.createElement ("template");
template.innerHTML = `
<style>
    #main {
        display: flex;
        flex-direction: column;
    }

    .experience {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1em;
        align-items: center;
        border-bottom :solid thin grey;
    }

    .year {
        font-size: 24px;
        font-weight: bold;
        min-width: 121px;
    }

    .experience-container {
        text-align: right;
        max-width: calc(100% - 121px - 5%);
    }

    .experience-title {
        font-weight: bold;
    }

    ul {
        list-style-type: none;
    }
</style>
<div id="main">
    <div class="experience">
        <div class="year">
            2020-2021
        </div>
        <div class="experience-container">
            <div class="experience-title">
                Tutorat à l’INRIA de Sophia Antipolis sur une application Java de calcul distribué
            </div>
            <div class="experience-description">
                <ul>
                    <li>Développement d’une interface REST pour l’application</li>
                    <li>Réalisation de graphiques à partir de données JSON fournies par l’application</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="experience">
        <div class="year">
            2020-2021
        </div>
        <div class="experience-container">
            <div class="experience-title">
                Tutorat à l’INRIA de Sophia Antipolis sur une application Java de calcul distribué
            </div>
            <div class="experience-description">
                <ul>
                    <li>Développement d’une interface REST pour l’application</li>
                    <li>Réalisation de graphiques à partir de données JSON fournies par l’application</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="experience">
        <div class="year">
            2018
        </div>
        <div class="experience-container">
            <div class="experience-title">
                Stage d’un mois, modifications et déploiements des mises à jour d’une application PHP 
            </div>
            <div class="experience-description">
                <ul>
                    <li>Formulaire permettant l’ajout de pièces jointes à des mails automatiques</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="experience">
        <div class="year">
            2019
        </div>
        <div class="experience-container">
            <div class="experience-title">
            Stage d’un mois, modification et déploiement d’un site web PHP et Javascript
            </div>
            <div class="experience-description">
            </div>
        </div>
    </div>
</div>
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