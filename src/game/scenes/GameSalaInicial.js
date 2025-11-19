import { BaseScene } from "./BaseScene";

export class GameSalaInicial extends BaseScene {
  constructor() {
    super("GameSalaInicial");
  }

  create() {
    this.physics.world.setBounds(30, 65, 265, 192);

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_principal"
    );

    this.character = this.physics.add.sprite(
      161, // x position
      220, // y position
      "character"
    );

    // Configura movimento usando a classe base
    this.setupMovement(this.character, 160);
    this.setupPlayerPosition(161, 220);

    // Cria colisões usando método da base
    const colisao = this.createCollisionObjects([
      { x: 66, y: 130, width: 15, height: 48 },
      { x: 275, y: 130, width: 15, height: 45 },
      { x: 130, y: 98, width: 60, height: 16 },
      { x: 0, y: 98, width: 47, height: 16 },
      { x: 210, y: 82, width: 30, height: 16 },
      { x: 64, y: 195, width: 32, height: 30 },
      { x: 145, y: 242, width: 32, height: 30 },
    ]);
    this.physics.add.collider(this.character, colisao);

    this.createDoor(280, 100, 15, 30, "GameCinema", 58, 113, "DireitaCima");
    this.createDoor(280, 195, 15, 30, "GameCinema", 58, 210, "DireitaBaixo");

    // Portas de baixo
    this.createDoor(66, 250, 30, 15, "GameMaterial", 80, 95, "BaixoEsquerda");
    this.createDoor(226, 250, 30, 15, "GameMaterial", 223, 95, "BaixoDireita");

    this.createInteractiveObject(
      150, // x position
      150, // y position
      40, // width
      40, // height
      () => this.startMemoryGame()
    );

    // Input para teste
    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    this.updateMovement();
  }
}
