import { BaseScene } from "./BaseScene.js";

export class GameChas extends BaseScene {
  constructor() {
    super("GameChas");
  }

  create() {
    this.physics.world.setBounds(80, 90, 162, 118);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_chas"
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupPlayerPosition(161, 184);
    this.setupMovement(this.character, 160);

    this.createDoor(146, 202, 30, 15, "GameCorredor", 207, 150, "portaBaixo");
    this.createDoor(231, 110, 15, 30, "GameCarroca", 60, 208, "PortaLateral");
    // 25, 195, +35x e +13y
  }

  update() {
    this.updateMovement();
  }
}
