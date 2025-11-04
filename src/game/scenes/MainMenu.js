import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "logo")
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    this.add
      .text(512, 460, "Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      //Alterar dnv
      this.scene.start("GameCarroca");
    });
  }
}
