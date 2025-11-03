import { BaseScene } from "./BaseScene.js";

export class GameMaterial extends BaseScene {
  constructor() {
    super("GameMaterial");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_material"
    );

    this.character = this.physics.add.sprite(100, 300, "character");

    this.setupMovement(this.character, 160);

    this.createDoor(67, 60, 29, 15, "GameSalaInicial");
    this.createDoor(210, 60, 29, 15, "GameSalaInicial");

    this.createDoor(280, 131, 15, 30, "GameCorredor");
  }

  update() {
    // Movimento automático se quiser controle manual
    this.updateMovement();
  }
}
