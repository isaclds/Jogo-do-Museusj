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

    this.createDoor(67, 60, 29, 15, "GameSalaInicial", 80, 228, "CimaEsquerda");
    this.createDoor(
      210,
      60,
      29,
      15,
      "GameSalaInicial",
      240,
      228,
      "CimaDireita"
    );

    this.createDoor(
      280,
      131,
      15,
      30,
      "GameCorredor",
      65,
      128,
      "LateralDireita"
    );

    const colisao = this.createCollisionObjects([
      { x: 30, y: 97, width: 36, height: 34 },
      { x: 30, y: 160, width: 36, height: 34 },
      { x: 30, y: 242, width: 265, height: 15 },
      { x: 112, y: 70, width: 80, height: 12 },
      { x: 243, y: 225, width: 28, height: 16 },
      { x: 82, y: 225, width: 45, height: 16 },
      { x: 273, y: 80, width: 15, height: 48 },
      { x: 273, y: 165, width: 15, height: 48 },
    ]);

    this.physics.add.collider(this.character, colisao);
  }

  update() {
    // Movimento automático se quiser controle manual
    this.updateMovement();
  }
}
