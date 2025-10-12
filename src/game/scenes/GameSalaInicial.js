import { Scene } from "phaser";

export class GameSalaInicial extends Scene {
  constructor() {
    super("GameSalaInicial");
  }

  init() {}

  create() {
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala1"
    );

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {}
}
