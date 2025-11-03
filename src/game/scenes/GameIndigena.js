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
      "sala_indigena"
    );

    this.character = this.physics.add.sprite(100, 300, "character");
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

    this.createDoor(146, 202, 30, 15, "GameCorredor");

    // Objetos interativos específicos desta sala
    // this.artefato1 = this.createInteractiveObject(100, 120, 20, 20, () => {
    //   console.log("Interagiu com Artefato 1");
    // });
  }

  update() {
    this.updateMovement();
  }
}
