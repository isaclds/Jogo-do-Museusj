import { BaseScene } from "./BaseScene.js";

export class GameSalaIndigena extends BaseScene {
  constructor() {
    super("GameSalaIndigena");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_indigena"
    );

    this.character = this.physics.add.sprite(100, 300, "character");
    this.setupMovement(this.character, 160);

    this.createDoor(50, 100, 15, 30, "GameCorredor");

    // Objetos interativos específicos desta sala
    this.artefato1 = this.createInteractiveObject(100, 120, 20, 20, () => {
      console.log("Interagiu com Artefato 1");
    });
  }

  createInteractiveObject(x, y, width, height, callback) {
    const obj = this.physics.add.staticBody(x, y, width, height);

    this.physics.add.overlap(this.character, obj, callback, null, this);

    return obj;
  }

  update() {
    this.updateMovement();
  }
}
