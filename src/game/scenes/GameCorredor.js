import { BaseScene } from "./BaseScene.js";

export class GameCorredor extends BaseScene {
  constructor() {
    super("GameCorredor");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "corredor"
    );

    this.character = this.physics.add.sprite(100, 300, "character");
    this.setupMovement(this.character, 160);

    this.createDoor(50, 100, 15, 30, "GameMaterial");
    this.createDoor(150, 200, 15, 30, "GameSalaIndigena");
  }

  update() {
    this.updateMovement();
  }
}
