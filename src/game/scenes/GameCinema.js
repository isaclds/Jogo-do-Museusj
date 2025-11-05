import { BaseScene } from "./BaseScene.js";

export class GameCinema extends BaseScene {
  constructor() {
    super("GameCinema");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_cinema"
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 184);

    this.createDoor(280, 212, 15, 30, "GameCarroca", 58, 113, "DireitaBaixo");

    this.createDoor(
      25,
      195,
      15,
      30,
      "GameSalaInicial",
      260,
      210,
      "EsquerdaBaixo"
    );
    this.createDoor(
      25,
      100,
      15,
      30,
      "GameSalaInicial",
      263,
      113,
      "EsquerdaCima"
    );
  }

  update() {
    this.updateMovement();
  }
}
