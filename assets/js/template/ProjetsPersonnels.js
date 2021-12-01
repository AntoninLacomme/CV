const template = document.createElement ("template");
template.innerHTML = `
<style>
    h3 {
        font-size: 24px;
        text-align: center;
        text-decoration: underline;    
    }

    .main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: row;
    }

    .element {
        min-width : calc(45% - 1px);
        width: calc(45% - 1px);
        padding: 0.5em;
    }

    a {
        color: darkblue;
    }

    span.span-image {
        display: flex;
        justify-content: flex-end;
    }
    img {
        width: 48px;
        margin: 0.2em;
    }
</style>

<div id="main">
    <h3>Projets NodeJS</h3>
    <div class="main-container">
        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/AudioProject">Projet Audio</a></h4>
            <p>
            Lecteur audio tournant avec un serveur NodeJS. Permet de choisir un dossier local et crée une playlist de tous les fichiers mp3 trouvés. 
            L'application est également capable de télécharger et sauvegarder dans le dossier des musiques provenant de youtube.
            Une petite animation pulse sur l'écran en fonction des fréquences du fichier en cours.
            </p>
            <span class="span-image"><img src="icon-nodejs.svg"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>
    </div>

    <h3>Projets web</h3>
    <div class="main-container">
        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/TPWebComponent">TP Web Component</a></h4>
            <p>
            Projet à héberger sur un serveur web, ayant servi de TP pour se familiariser avec les Web Components. Il consiste en un lecteur audio.
            </p>
            <a href="https://antoninlacomme.github.io/TPWebComponent/">
                Hébergement sur github pages
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/GameOfLife">Jeu de la Vie</a></h4>
            <p>
                Une simulation en javascript d'un <a href="http://ressources.univ-lemans.fr/AccesLibre/UM/Pedago/physique/02/recre/conway.html">jeu de la vie</a>.
            </p>
            <a href="https://antoninlacomme.github.io/GameOfLife/">
                Hébergement sur github pages
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/ChuiPerduChef">Générateur de Labyrinthe</a></h4>
            <p>
                Un générateur de labyrinthe développé en javascript.
            </p>
            <a href="https://antoninlacomme.github.io/ChuiPerduChef/">
                Hébergement sur github pages
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/Hexagone">Hexagones</a></h4>
            <p>
                Ce projet affiche un simple fond gris. Cliquez n'importe où sur l'écran pour faire apparaitre des chenilles contituées d'hexagones qui vont courir dans tous les sens, jusqu'à disparaitre hors de l'écran.
            </p>
            <a href="https://antoninlacomme.github.io/Hexagone/">
                Hébergement sur github pages
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/Tankilla">Tankilla</a></h4>
            <p>
                Jeu Javascript où l'on controle un tank avec ZQSD. L'ordinateur controle un second tank aux déplacements aléatoires. L'objectif, le détruire le plus de fois possible avant que notre propre vie ne tombe à 0.
            </p>
            <a href="https://antoninlacomme.github.io/Tankilla/">
                Hébergement sur github pages 
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/Sudokuv2">Sudoku</a></h4>
            <p>
                Un Sudoku développé lors de mon BTS.
            </p>
            <a href="https://antoninlacomme.github.io/Sudokuv2/">
                Hébergement sur github pages 
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>

        <div class="element">
            <h4><a href="https://github.com/AntoninLacomme/Chess">Chess</a></h4>
            <p>
                Un jeu d'échec pas encore abouti. Peut se jouer à 2 en local sur une même machine.
            </p>
            <a href="https://antoninlacomme.github.io/Chess/">
                Hébergement sur github pages 
            </a>
            <span class="span-image"><img src="icon-javascript.svg"><img src="icon-html5.svg"></span>
        </div>
    </div>
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

        this.shadowRoot.querySelectorAll ("a").forEach (elem => elem.target = "_blank");
        this.shadowRoot.querySelectorAll ("img").forEach (image => image.src = "./assets/js/template/icons/" + image.src.slice (image.src.lastIndexOf ("/")+1));
    }
}


customElements.define("personnal-projects", ProjetsPersonnels);