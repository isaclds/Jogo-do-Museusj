import { Scene } from "phaser";

export class Historia extends Scene {
  constructor() {
    super("Historia");
  }

  create() {
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "historia_imagem"
      )
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    this.input.once("pointerdown", () => {
      //Alterar dnv
      this.scene.start("Controles");
    });
  }
}
