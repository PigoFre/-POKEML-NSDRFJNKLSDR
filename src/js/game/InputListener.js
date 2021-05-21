import StateManager from "./StateManager";

class InputListener {
    constructor (game) {
        this.game = game;
        this.inputPressingTime = 0;
        this.gameTime = 0;
    }

    addKeyboardListener () {}

    addDPadListener () {}

    update (gameTime) {}
};

export default InputListener;