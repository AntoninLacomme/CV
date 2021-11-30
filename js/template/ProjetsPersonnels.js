const template = document.createElement ("template");
template.innerHTML = `
<style>
    a {
        color: blue;
    }
</style>

<h3>Projets NodeJS</h3>
<div>
    <h4><a href="https://github.com/AntoninLacomme/AudioProject" target="_blank">Projet Audio</a></h4>
    <p>
    Lecteur audio tournant avec un serveur NodeJS. Permet de choisir un dossier local et crée une playliste de tous les fichiers mp3 trouvés. 
    L'application est également capable de télécharger et sauvegarder dans le dossier des musiques provenant de youtube.
    Une petite animation pulse sur l'écran en fonction des fréquences du fichier en cours.
    </p>
</div>
`

class ProjetsPersonnels extends HTMLElement {
    constructor () {
        super ();
        this.checked = true;
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define("personnal-projects", ProjetsPersonnels);