const template = document.createElement ("template");
template.innerHTML = `
<style>
    a {
        color: darkblue;
    }
</style>

<h3>Projets NodeJS</h3>
<div>
    <h4><a href="https://github.com/AntoninLacomme/AudioProject">Projet Audio</a></h4>
    <p>
    Lecteur audio tournant avec un serveur NodeJS. Permet de choisir un dossier local et crée une playliste de tous les fichiers mp3 trouvés. 
    L'application est également capable de télécharger et sauvegarder dans le dossier des musiques provenant de youtube.
    Une petite animation pulse sur l'écran en fonction des fréquences du fichier en cours.
    </p>
</div>

<h3>Projets web</h3>
<div>
    <h4><a href="https://github.com/AntoninLacomme/TPWebComponent">TP Web Component</a></h4>
    <p>
    Projet à héberger sur un serveur web, ayant servi de TP pour se familiariser avec les Web Components. Il consiste en un lecteur audio.
    </p>
    <a href="https://antoninlacomme.github.io/TPWebComponent/">
        Hébergement sur github pages
    </a>
</div>

<div>
    <h4><a href="https://github.com/AntoninLacomme/Hexagone">Hexagones</a></h4>
    <p>
        Ce projet affiche un simple fond gris. Cliquez n'importe où sur l'écran pour faire apparaitre des chenilles contituées d'hexagones qui vont courir dans tous les sens, jusqu'à disparaitre hors de l'écran.
    </p>
    <a href="https://antoninlacomme.github.io/Hexagone/">
        Hébergement sur github pages
    </a>
</div>

<div>
    <h4><a href="https://github.com/AntoninLacomme/Tankilla">Tankilla</a></h4>
    <p></p>
    <a href="https://antoninlacomme.github.io/Tankilla/">
        Hébergement sur github pages 
    </a>
</div>

<div>
    <h4><a href="https://github.com/AntoninLacomme/Sudokuv2">Sudoku</a></h4>
    <p>
    </p>
    <a href="https://antoninlacomme.github.io/Sudokuv2/">
        Hébergement sur github pages 
    </a>
</div>

<div>
    <h4><a href="https://github.com/AntoninLacomme/Chess">Sudoku</a></h4>
    <p>
    </p>
    <a href="https://antoninlacomme.github.io/Chess/">
        Hébergement sur github pages 
    </a>
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

        this.shadowRoot.querySelectorAll ("a").forEach (elem => elem.target = "_blank")
    }
}


customElements.define("personnal-projects", ProjetsPersonnels);