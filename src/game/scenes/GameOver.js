import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.cameras.main.setBackgroundColor(0xff0000);

    this.add.image(512, 384, "background").setAlpha(0.5);

    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Fim do Jogo",
        {
          fontFamily: "Arial Black",
          fontSize: 32,
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 4,
          align: "center",
        }
      )
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }
}
