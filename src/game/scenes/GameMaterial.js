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
      "material"
    );

    this.character = this.physics.add.sprite(100, 300, "character");

    // Configura movimento (herdado da BaseScene)
    this.setupMovement(this.character, 160);

    // Cria portas usando método herdado
    this.createDoor(50, 100, 15, 30, "GameSalaInicial");
    this.createDoor(280, 150, 15, 30, "GameCorredor");
  }

  update() {
    // Movimento automático se quiser controle manual
    this.updateMovement();
  }
}
