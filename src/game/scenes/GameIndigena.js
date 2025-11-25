import { BaseScene } from "./BaseScene.js";

export class GameIndigena extends BaseScene {
  constructor() {
    super("GameIndigena");
  }

  create() {
    this.physics.world.setBounds(80, 90, 162, 118);

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_indigena" +
        (this.registry.get("jogoMemoriaIndigenaConcluido") ? "_pos" : "")
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);

    const bancos = [
      { x: 84, y: 130, width: 11, height: 45 },
      { x: 228, y: 130, width: 11, height: 45 },
      { x: 130, y: 100, width: 60, height: 11 },
    ];

    this.physics.add.collider(
      this.character,
      this.createCollisionObjects(bancos)
    );

    this.createDoor(146, 202, 30, 15, "GameCorredor", 113, 115, "porta");

    this.createInteractiveObject(
      150, // x position
      150, // y position
      40, // width
      40, // height
      () => this.comecarJogoDaMemoriaIndigena()
    );
  }

  update() {
    this.updateMovement();
  }
}
