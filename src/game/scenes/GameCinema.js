import { BaseScene } from "./BaseScene.js";

export class GameCinema extends BaseScene {
  constructor() {
    super("GameCinema");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_cinema"
    );

    this.character = this.physics.add.sprite(161, 184, "character");
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 184);

    this.createDoor(280, 212, 15, 30, "GameCarroca", 58, 113, "DireitaBaixo");

    this.createDoor(
      25,
      195,
      15,
      30,
      "GameSalaInicial",
      260,
      210,
      "EsquerdaBaixo"
    );
    this.createDoor(
      25,
      100,
      15,
      30,
      "GameSalaInicial",
      263,
      113,
      "EsquerdaCima"
    );

    const colisao = this.createCollisionObjects([
      { x: 60, y: 65, width: 220, height: 18 },
      { x: 66, y: 114, width: 30, height: 45 },
      { x: 130, y: 114, width: 30, height: 45 },
      { x: 195, y: 114, width: 30, height: 45 },
      { x: 273, y: 145, width: 15, height: 33 },
      { x: 180, y: 195, width: 110, height: 15 },
    ]);

    this.physics.add.collider(this.character, colisao);
  }

  update() {
    this.updateMovement();
  }
}
