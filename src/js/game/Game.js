import Loader from "./Loader";
import InputListener from "./InputListener";
import InputController from "./InputController";
import Network from "./Network";

class Game {
    constructor () {
        this.gameLoop;
        this.time = performance.now();
        this.elements = {};
    }

    start () {
        this.inputListener = new InputListener(this);
        this.startUpdate();
        this.addEvents();
    }

    async load () {
        return Promise.resolve();
    }

    startUpdate () {
        console.log("initou");
        this.gameLoop = setInterval(() => this.update(), 1000 / 30);
    }

    pauseUpdate () {
        console.log("pausou");
        clearInterval(this.gameLoop);
    }

    update () {
        const timeNow = performance.now() - this.time;
        this.inputListener.update(timeNow);
        this.time = performance.now();
    }

    addEvents () {
        window.addEventListener("blur", () => this.pauseUpdate());
        window.addEventListener("focus", () => this.startUpdate());
    }
};

export default Game;