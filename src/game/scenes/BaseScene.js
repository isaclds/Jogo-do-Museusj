import { Scene } from "phaser";

export class BaseScene extends Scene {
  setupMovement(character, speed = 160) {
    this.character = character;
    this.characterSpeed = speed;
    this.cursors = this.input.keyboard.createCursorKeys();

    // Configurações básicas do personagem
    this.character.setCollideWorldBounds(true);
    this.character.setScale(0.5);
  }

  updateMovement() {
    if (!this.cursors || !this.character) return;

    // Reset velocity
    this.character.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.character.setVelocityX(-this.characterSpeed);
    } else if (this.cursors.right.isDown) {
      this.character.setVelocityX(this.characterSpeed);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.character.setVelocityY(-this.characterSpeed);
    } else if (this.cursors.down.isDown) {
      this.character.setVelocityY(this.characterSpeed);
    }
  }

  // Método utilitário para criar portas
  createDoor(x, y, width = 15, height = 30, targetScene, callback = null) {
    const door = this.physics.add.staticBody(x, y, width, height);

    this.physics.add.overlap(
      this.character,
      door,
      () => {
        if (callback) {
          callback();
        } else {
          this.useDoor(targetScene);
        }
      },
      null,
      this
    );

    return door;
  }

  useDoor(targetScene) {
    this.registry.set("playerPosition", targetScene);
    this.scene.start(targetScene);
  }

  // Método utilitário para criar objetos interativos
  createInteractiveObject(x, y, width, height, callback) {
    const obj = this.physics.add.staticBody(x, y, width, height);

    this.physics.add.overlap(this.character, obj, callback, null, this);

    return obj;
  }

  // Método para criar múltiplos objetos de colisão
  createCollisionObjects(objectsArray) {
    const collisionBodies = [];

    objectsArray.forEach((obj) => {
      const body = this.physics.add.staticBody(
        obj.x,
        obj.y,
        obj.width,
        obj.height
      );
      collisionBodies.push(body);
    });

    return collisionBodies;
  }
}
