import { BaseScene } from "./BaseScene";

export class GameSalaInicial extends BaseScene {
  constructor() {
    super("GameSalaInicial");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala1"
    );

    this.character = this.physics.add.sprite(
      100, // x position
      300, // y position
      "character"
    );

    // Configura movimento usando a classe base
    this.setupMovement(this.character, 160);

    // Hitboxes - mesas e obstáculos
    const mesas = [
      { x: 66, y: 130, width: 15, height: 48 },
      { x: 275, y: 130, width: 15, height: 45 },
      { x: 130, y: 98, width: 60, height: 16 },
      { x: 0, y: 98, width: 47, height: 16 },
      { x: 210, y: 82, width: 30, height: 16 },
    ];

    // Cria colisões usando método da base
    const colisao = this.createCollisionObjects(mesas);
    this.physics.add.collider(this.character, colisao);

    // Cria porta usando método da base (substitui a porta manual)
    this.createDoor(270, 100, 15, 30, "GameOver");

    // Input para teste (opcional - pode remover se não for necessário)
    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    // Atualiza movimento usando método da classe base
    this.updateMovement();
  }
}
