import { BaseScene } from "./BaseScene.js";

export class GameCarroca extends BaseScene {
  constructor() {
    super("GameCarroca");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_carroca"
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 184);

    this.createDoor(25, 100, 15, 30, "GameCinema", 263, 225, "EsquerdaCima");
    this.createDoor(25, 195, 15, 30, "GameChas", 210, 120, "PortaBaixo");
  }

  update() {
    this.updateMovement();
  }
}
