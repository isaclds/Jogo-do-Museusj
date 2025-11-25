import { Scene } from "phaser";

export class Controles extends Scene {
  constructor() {
    super("Controles");
  }

  create() {
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "controles_imagem"
      )
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    this.input.once("pointerdown", () => {
      //Alterar dnv
      this.scene.start("GameSalaInicial");
    });
  }
}
