import { BaseScene } from "./BaseScene.js";

export class GameCinema extends BaseScene {
  constructor() {
    super("GameCinema");
  }

  create() {
    this.physics.world.setBounds(80, 90, 162, 118);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_cinema"
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 184);
  }

  update() {
    this.updateMovement();
  }
}
