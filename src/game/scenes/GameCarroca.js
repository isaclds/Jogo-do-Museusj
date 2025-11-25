import { BaseScene } from "./BaseScene.js";

export class GameCarroca extends BaseScene {
  constructor() {
    super("GameCarroca");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_carroca" +
        (this.registry.get("jogoMemoriaCarrocaConcluido") ? "_pos" : "")
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 184);

    this.createDoor(25, 100, 15, 30, "GameCinema", 263, 225, "EsquerdaCima");
    this.createDoor(25, 195, 15, 30, "GameChas", 210, 120, "PortaBaixo");

    const colisao = this.createCollisionObjects([
      { x: 128, y: 98, width: 64, height: 80 },
      { x: 131, y: 195, width: 60, height: 30 },
      { x: 33, y: 145, width: 15, height: 33 },
    ]);
    this.physics.add.collider(this.character, colisao);

    this.createInteractiveObject(
      150, // x position
      150, // y position
      40, // width
      40, // height
      () => this.comecarJogoDaMemoriaCarroca()
    );
  }

  update() {
    this.updateMovement();
  }
}
