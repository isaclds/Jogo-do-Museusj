import { Scene } from "phaser";

export class BaseScene extends Scene {
  setupMovement(character, speed = 160) {
    this.character = character;
    this.characterSpeed = speed;
    this.cursors = this.input.keyboard.createCursorKeys();

    this.character.setCollideWorldBounds(true);
    this.character.setScale(0.5);
  }

  updateMovement() {
    if (!this.cursors || !this.character) return;

    this.character.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.character.setVelocityX(-this.characterSpeed);
    } else if (this.cursors.right.isDown) {
      this.character.setVelocityX(this.characterSpeed);
    }

    if (this.cursors.up.isDown) {
      this.character.setVelocityY(-this.characterSpeed);
    } else if (this.cursors.down.isDown) {
      this.character.setVelocityY(this.characterSpeed);
    }
  }

  startMemoryGame() {
    // Pausa a cena atual e inicia o jogo da memória
    this.scene.pause();
    this.scene.launch("JogoDaMemoria");
  }

  createDoor(x, y, width, height, targetScene, spawnX, spawnY, doorId = null) {
    const door = this.physics.add.staticBody(x, y, width, height);

    //Porta baixo +13x e +35y
    // Porta lateral para direita +35x e +13y
    // Porta lateral para esquerda -20x e +13y
    //Porta cima +14x e -22y
    this.physics.add.overlap(
      this.character,
      door,
      () => {
        this.useDoor(targetScene, spawnX, spawnY, doorId);
      },
      null,
      this
    );

    return door;
  }

  useDoor(targetScene, spawnX, spawnY, doorId = null) {
    // Salva a posição de spawn para a próxima sala
    this.registry.set("playerSpawn", {
      x: spawnX,
      y: spawnY,
      doorId: doorId,
    });

    this.scene.start(targetScene);
  }

  // Método para posicionar o jogador baseado no registry
  setupPlayerPosition(defaultX, defaultY) {
    const spawnData = this.registry.get("playerSpawn");

    if (spawnData && spawnData.x && spawnData.y) {
      this.character.setPosition(spawnData.x, spawnData.y);
      // Limpa os dados de spawn após usar
      this.registry.set("playerSpawn", null);
    } else {
      // Posição padrão se não houver dados de spawn
      this.character.setPosition(defaultX, defaultY);
    }
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
