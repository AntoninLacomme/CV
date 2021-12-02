const template = document.createElement ("template");
template.innerHTML = `
<style>
    .midd-container {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    span {
        padding: 1em;
    }
    img {
        width: 48px;
    }
</style>

<div id="main">
    <div class="container">
        <h3>Astronomie</h3>
        <div class="midd-container">
            <span class="right-align saturn"><img src="saturn-icon.png"></span>
            <p>
            Je suis un grand intéressé par l'astronomie. Je ne suis pas un observateur, le matériel est un peu trop hors de prix et on ne voit jamais rien d'intéressant sans matériel digne de ce nom.
            Mais le spatial reste extrêmement intéressant, et s'intéresser à pourquoi le système solaire est tel qu'il est, ainsi que ce qui le compose est une de mes principales passions.
            </p>
            <span class="right-align saturn"><img src="moon-icon.png"></span>
        </div>
    </div>

    <div class="container">
        <h3>Stratégies</h3>
        <div class="midd-container">
            <span class="right-align saturn"><img src="chess-1-icon.svg"></span>
            <p>
                Je suis un grand amateur de jeux de stratégies. Civilization, Age of Empire, Echecs, j'ai passé un temps déraisonnable sur ces jeux. 
                Mais je n'ai jamais réussi à dépasser les 800 points sur le ranking de <a href="https://chess.com">chess.com</a>... Comme quoi on peut apprécier quelque chose sans pour autant y être très doué.
            </p>
            <span class="right-align saturn"><img src="chess-2-icon.png"></span>
        </div>
    </div>

    <div class="container">
        <h3>Fantaisie</h3>
        <div class="midd-container">
            <span class="right-align saturn"><img src="dragon-icon.png"></span>
            <p>
                J'apprécie énormément la fantaisie. Quand une oeuvre parle magie et dragon, elle part d'un très bon pied pour me plaire. Livres, films, mangas, dès que sa parle fantaisie je suis un homme heureux.
                <a href="https://www.babelio.com/livres/Hobb-LAssassin-royal-Tome-1--Lapprenti-assassin/6863">L'Assassin Royal</a> est mon oeuvre favorite, j'ai descendu l'intégralité des oeuvres de Robin Hobb.
            </p>
            <span class="right-align saturn"><img src="mana-icon.png"></span>
        </div>
    </div>
</div>
`

class AboutMyself extends HTMLElement {

    constructor () {
        super ();
        this.attachShadow ({mode: "open"})
    }

    connectedCallback () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelectorAll ("a").forEach (elem => elem.target = "_blank");
        this.shadowRoot.querySelectorAll ("img").forEach (image => image.src = "./assets/js/template/icons/" + image.src.slice (image.src.lastIndexOf ("/")+1));
    }
}

customElements.define("about-myself", AboutMyself);