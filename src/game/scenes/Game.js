// game/scenes/Game.js
import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super({ key: "Game" });
  }

  create() {
    // Cria uma sala simples com gráficos primitivos
    this.createSimpleRoom();
    this.createSimplePlayer();
    this.setupControls();

    // Adiciona texto de debug
    this.add.text(5, 5, "Sala do GameBoy", {
      fontSize: "8px",
      color: "#0f380f",
      fontFamily: "Courier",
    });
  }

  createSimpleRoom() {
    // Fundo da sala (chão)
    this.add.rectangle(80, 72, 150, 130, 0xe8f8a0).setStrokeStyle(2, 0x306230);

    // Paredes com física
    this.walls = this.physics.add.staticGroup();

    this.walls.create(5, 72, null).setSize(10, 130); // Esquerda
    this.walls.create(155, 72, null).setSize(10, 130); // Direita
    this.walls.create(80, 5, null).setSize(150, 10); // Topo
    this.walls.create(80, 139, null).setSize(150, 10); // Base

    // Visual das paredes
    this.add.rectangle(5, 72, 10, 130, 0x306230); // Esquerda
    this.add.rectangle(155, 72, 10, 130, 0x306230); // Direita
    this.add.rectangle(80, 5, 150, 10, 0x306230); // Topo
    this.add.rectangle(80, 139, 150, 10, 0x306230); // Base

    // Móveis simples
    this.add.rectangle(40, 50, 30, 20, 0x8bac0f); // Cama
    this.add.rectangle(120, 50, 25, 25, 0x0f380f); // Mesa
    this.add.rectangle(60, 100, 20, 15, 0x9bbc0f); // Cadeira
  }

  createSimplePlayer() {
    // Cria o jogador com física
    this.player = this.physics.add.sprite(80, 72, null);
    this.player.setCollideWorldBounds(true);
    this.player.setSize(12, 12);
    this.player.setOffset(2, 2);

    // Desenha o jogador como um quadrado colorido
    const playerGraphics = this.add.graphics();
    playerGraphics.fillStyle(0x0f380f, 1);
    playerGraphics.fillRect(-6, -6, 12, 12);
    this.player.add(playerGraphics);

    // Adiciona colisão com as paredes
    this.physics.add.collider(this.player, this.walls);
  }

  setupControls() {
    this.cursors = this.input.keyboard.createCursorKeys();

    // Alternativa com WASD
    this.keys = this.input.keyboard.addKeys({
      W: "W",
      A: "A",
      S: "S",
      D: "D",
    });
  }

  update() {
    const speed = 80;
    this.player.setVelocity(0);

    // Movimento com setas e WASD
    if (this.cursors.left.isDown || this.keys.A.isDown) {
      this.player.setVelocityX(-speed);
    } else if (this.cursors.right.isDown || this.keys.D.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors.up.isDown || this.keys.W.isDown) {
      this.player.setVelocityY(-speed);
    } else if (this.cursors.down.isDown || this.keys.S.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}
