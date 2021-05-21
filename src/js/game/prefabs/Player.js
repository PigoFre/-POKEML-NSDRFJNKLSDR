import Character from "./Character";

class Player extends Character {
    constructor (game, data) {
        super(game, data);
        this.isPlayer = true;
        this.moveInProgress = false;
        this.stop = false;
    }

    addToScene () {
        this.$el = document.createElement("div");
        this.$el.setAttribute("class", `${this.character} ${this.character}_${this.position.facing}`);
        this.$el.setAttribute("id", "character");
        // putting position according to tile size
        this.$el.style.left = (this.position.x * TILE.SIZE) + "px";
        this.$el.style.top = (this.position.y * TILE.SIZE) + "px";
        this.game.elements.player.appendChild(this.$el);
    }

    sendMove (direction) {}

    sendFacing () {}
};

export default Player;