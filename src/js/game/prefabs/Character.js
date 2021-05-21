class Character {
    constructor (game, data) {
        this.game = game;
        this.$el;
    }

    addToScene () {
        this.$el = document.createElement("div");
        this.$el.setAttribute("class", `${this.character} ${this.character}_${this.position.facing}`);
        // putting position according to tile size
        this.$el.style.left = (this.position.x * TILE.SIZE) + "px";
        this.$el.style.top = (this.position.y * TILE.SIZE) + "px";
        if (this.type === CHAR_TYPES.REMOTE_PLAYER)
            this.$el.setAttribute("data-remote", true);
        this.game.elements.world.appendChild(this.$el);
    }

    async walk (direction) {}

    collide (direction) {}
};

export default Character;