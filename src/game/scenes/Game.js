import { Scene } from "phaser";

export class Game extends Scene {


  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);
    this.add.image(512, 384, "background").setAlpha(0.5);
    this.add
      .text(512, 384, "Teste de alterações do que\n está escrito!", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
    .setOrigin(0.5);
    this.input.once("pointerdown", () => {
    this.scene.start("GameOver");
    });
  }

  createRoom() {
    // Criar limites da sala
    const roomWidth = 800;
    const roomHeight = 600;
    
    // Grupo para paredes
    this.walls = this.physics.add.staticGroup();
    
    // Criar paredes (top, bottom, left, right)
    this.walls.create(400, 0, 'wall').setScale(roomWidth / 64, 1).refreshBody();
    this.walls.create(400, roomHeight, 'wall').setScale(roomWidth / 64, 1).refreshBody();
    this.walls.create(0, 300, 'wall').setScale(1, roomHeight / 64).refreshBody();
    this.walls.create(roomWidth, 300, 'wall').setScale(1, roomHeight / 64).refreshBody();
    
    // Adicionar obstáculos
    this.walls.create(200, 200, 'obstacle');
    this.walls.create(600, 400, 'obstacle');
}

createPlayer() {
    // Criar sprite do jogador
    this.player = this.physics.add.sprite(400, 300, 'player');
    
    // Configurar física do jogador
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.2);
    this.player.setDrag(500);
    this.player.setMaxVelocity(200);
    
    // Configurar colisões
    this.physics.add.collider(this.player, this.wallsLayer || this.walls);
    
    // Configurar câmera para seguir jogador
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(1.5);
}

handlePlayerMovement() {
    // Resetar velocidade
    this.player.setVelocity(0);
    
    // Controles mais suaves
    const speed = 150;
    
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-speed);
        this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(speed);
        this.player.anims.play('right', true);
    }
    
    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-speed);
        this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(speed);
        this.player.anims.play('down', true);
    }
    
    // Animação idle
    if (this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0) {
        this.player.anims.play('idle');
    }
}


}