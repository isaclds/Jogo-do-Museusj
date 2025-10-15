import { Scene } from "phaser";

export class GameSalaInicial extends Scene {
  constructor() {
    super("GameSalaInicial");
  }

  init() {}

  create() {
    this.physics.world.setBounds(45, 32, 232, 192);

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala1"
    );

    //Hitboxes
    this.desk1 = this.physics.add.staticBody(82, 96, 15, 50);
    this.desk2 = this.physics.add.staticBody(226, 96, 15, 50);
    this.desk3 = this.physics.add.staticBody(115, 81, 92, 16);

    this.character = this.physics.add.sprite(
      100, // x position
      300, // y position
      "character" // texture key (make sure this matches what you loaded in preloader)
    );

    // Set character properties (optional)
    this.character.setCollideWorldBounds(true); // Keep character within game bounds

    this.character.setScale(0.5); // Adjust size if needed

    // Add cursor keys for movement (optional)
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.character, [
      this.desk1,
      this.desk2,
      this.desk3,
    ]);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    // Handle character movement (optional)
    if (this.cursors) {
      if (this.cursors.left.isDown) {
        this.character.setVelocityX(-160);
      } else if (this.cursors.right.isDown) {
        this.character.setVelocityX(160);
      } else {
        this.character.setVelocityX(0);
      }

      if (this.cursors.up.isDown) {
        this.character.setVelocityY(-160);
      } else if (this.cursors.down.isDown) {
        this.character.setVelocityY(160);
      } else {
        this.character.setVelocityY(0);
      }
    }
  }
}
