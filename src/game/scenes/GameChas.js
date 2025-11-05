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

    const colisao = this.createCollisionObjects([
      { x: 80, y: 130, width: 48, height: 45 },
      { x: 163, y: 100, width: 60, height: 10 },
      { x: 96, y: 100, width: 35, height: 10 },
      { x: 100, y: 195, width: 25, height: 10 },
      { x: 227, y: 145, width: 25, height: 45 },
    ]);
    this.physics.add.collider(this.character, colisao);
  }

  update() {
    this.updateMovement();
  }
}
