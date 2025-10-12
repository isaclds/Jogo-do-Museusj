import { Boot } from "./scenes/Boot";
import { GameSalaInicial } from "./scenes/GameSalaInicial";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { AUTO, Game, Physics } from "phaser";

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
  type: AUTO,
  width: 322,
  height: 228,
  parent: "game-container",
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Boot, Preloader, MainMenu, GameSalaInicial, GameOver],
};

const StartGame = (parent) => {
  return new Game({ ...config, parent });
};

export default StartGame;
