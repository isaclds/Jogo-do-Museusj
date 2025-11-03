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

    this.setupPlayerPosition(100, 300);

    this.setupMovement(this.character, 160);

    // 66,
    //   250,
    this.createDoor(
      67,
      60,
      29,
      15,
      "GameSalaInicial",
      80,
      228,
      "portaCimaEsquerda"
    );
    this.createDoor(
      210,
      60,
      29,
      15,
      "GameSalaInicial",
      240,
      228,
      "portaCimaDireita"
    );

    this.createDoor(
      280,
      131,
      15,
      30,
      "GameCorredor",
      65,
      128,
      "portaLateralDireita"
    );
  }

  update() {
    // Movimento automático se quiser controle manual
    this.updateMovement();
  }
}
