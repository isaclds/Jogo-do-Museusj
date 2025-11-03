import { BaseScene } from "./BaseScene.js";

export class GameCorredor extends BaseScene {
  constructor() {
    super("GameCorredor");
  }

  create() {
    this.physics.world.setBounds(35, 80, 254, 80);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "corredor"
    );

    this.character = this.physics.add.sprite(100, 300, "character");
    this.setupMovement(this.character, 160);

    //Portas laterais
    this.createDoor(30, 115, 15, 30, "GameMaterial");
    //Portas de cima
    this.createDoor(99, 80, 30, 15, "GameIndigena");
    //Direcionar para a sala das xicaras
    this.createDoor(194, 80, 30, 15, "GameSalaInicial");
  }

  update() {
    this.updateMovement();
  }
}
