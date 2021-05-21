import Game from "./Game";

export default async function () {
    const gameInstance = new Game();
    await gameInstance.load();
    gameInstance.start();
};