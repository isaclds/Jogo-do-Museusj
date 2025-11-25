import { Boot } from "./scenes/Boot";
import { GameSalaInicial } from "./scenes/GameSalaInicial";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { GameMaterial } from "./scenes/GameMaterial.js";
import { GameCorredor } from "./scenes/GameCorredor.js";
import { GameIndigena } from "./scenes/GameIndigena.js";
import { GameCarroca } from "./scenes/GameCarroca.js";
import { GameChas } from "./scenes/GameChas.js";
import { GameCinema } from "./scenes/GameCinema.js";
import { AUTO, Game, Physics } from "phaser";
import { JogoDaMemoriaInicial } from "./scenes/JogoDaMemoriaInicial.js";
import { JogoMemoriaIndigena } from "./scenes/JogoMemoriaIndigena.js";
import { JogoMemoriaCarroca } from "./scenes/JogoMemoriaCarroca.js";
import { JogoMemoriaCinema } from "./scenes/JogoMemoriaCinema.js";
import { Historia } from "./scenes/Historia.js";
import { Controles } from "./scenes/Controles.js";

const config = {
  type: AUTO,
  width: 322,
  height: 260,
  parent: "game-container",
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    Boot,
    Preloader,
    MainMenu,
    Historia,
    Controles,
    GameSalaInicial,
    JogoDaMemoriaInicial,
    JogoMemoriaIndigena,
    JogoMemoriaCarroca,
    JogoMemoriaCinema,
    GameMaterial,
    GameCorredor,
    GameIndigena,
    GameCarroca,
    GameChas,
    GameCinema,
    GameOver,
  ],
};

const StartGame = (parent) => {
  return new Game({ ...config, parent });
};

export default StartGame;
