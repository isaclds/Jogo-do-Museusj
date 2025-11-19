import { BaseScene } from "./BaseScene";

export class MemoryGameScene extends BaseScene {
  constructor() {
    super("MemoryGameScene");
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
  }

  preload() {
    // Carregar imagens dos artefatos
    const artefatos = [
      "vaso",
      "carroça",
      "canoa",
      "espada",
      "scroll",
      "statue",
    ];
    artefatos.forEach((artifact) => {
      this.load.image(artifact, `assets/artefatos/${artifact}.png`);
    });
  }

  create() {
    // Configuração do jogo
    this.gridSize = 4; // 4x4 grid
    this.cardSize = 80;
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.canFlip = true;

    // Fundo da cena
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "sala_principal"
    );

    this.createCards();
    this.setupUI();
  }

  createCards() {
    const artefatos = [
      "vaso",
      "carroça",
      "canoa",
      "espada",
      "scroll",
      "statue",
    ];
    const cardValues = [...artefatos, ...artefatos]; // Duplicar para pares
    Phaser.Utils.Array.Shuffle(cardValues);

    let cardIndex = 0;

    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        const x = 100 + col * (this.cardSize + 10);
        const y = 100 + row * (this.cardSize + 10);
        const value = cardValues[cardIndex];

        // Fundo da carta
        const card = this.add
          .rectangle(x, y, this.cardSize, this.cardSize, 0x8b4513)
          .setStrokeStyle(2, 0xffffff)
          .setInteractive();

        // Imagem do artefato (inicialmente escondida)
        const artifactImg = this.add
          .sprite(x, y, value)
          .setDisplaySize(this.cardSize - 10, this.cardSize - 10)
          .setVisible(false);

        card.setData({
          value: value,
          isFlipped: false,
          isMatched: false,
          frontImage: artifactImg,
        });

        card.on("pointerdown", () => this.flipCard(card));

        this.cards.push(card);
        cardIndex++;
      }
    }
  }

  flipCard(card) {
    if (
      !this.canFlip ||
      card.getData("isFlipped") ||
      card.getData("isMatched")
    ) {
      return;
    }

    // Virar carta
    card.setData("isFlipped", true);
    card.setFillStyle(0xffffff);
    card.getData("frontImage").setVisible(true);

    this.flippedCards.push(card);

    // Som de virar carta (opcional)
    // this.sound.play('card-flip');

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    this.canFlip = false;

    const [card1, card2] = this.flippedCards;
    const value1 = card1.getData("value");
    const value2 = card2.getData("value");

    if (value1 === value2) {
      // Par encontrado!
      card1.setData("isMatched", true);
      card2.setData("isMatched", true);
      card1.setFillStyle(0x00ff00);
      card2.setFillStyle(0x00ff00);

      this.matchedPairs++;

      // Som de sucesso (opcional)
      // this.sound.play('match-sound');

      this.flippedCards = [];
      this.canFlip = true;

      this.checkGameComplete();
    } else {
      // Não é par, virar de volta
      this.time.delayedCall(1000, () => {
        card1.setData("isFlipped", false);
        card2.setData("isFlipped", false);
        card1.setFillStyle(0x8b4513);
        card2.setFillStyle(0x8b4513);
        card1.getData("frontImage").setVisible(false);
        card2.getData("frontImage").setVisible(false);

        this.flippedCards = [];
        this.canFlip = true;
      });
    }
  }

  checkGameComplete() {
    if (this.matchedPairs === this.cards.length / 2) {
      this.add
        .text(this.cameras.main.centerX, 50, "Memória Completa!", {
          fontSize: "32px",
          color: "#00ff00",
        })
        .setOrigin(0.5);

      // Efeito de confete ou animação
      this.createCelebration();
    }
  }

  createCelebration() {
    // Pequenas partículas para comemoração
    for (let i = 0; i < 20; i++) {
      const particle = this.add.circle(
        Phaser.Math.Between(100, 700),
        Phaser.Math.Between(100, 500),
        5,
        Phaser.Math.RND.pick([0xff0000, 0x00ff00, 0x0000ff, 0xffff00])
      );

      this.tweens.add({
        targets: particle,
        y: 600,
        alpha: 0,
        duration: 2000,
        ease: "Power2",
      });
    }
  }

  setupUI() {
    // Contador de pares
    this.pairsText = this.add
      .text(
        this.cameras.main.centerX,
        550,
        `Pares: ${this.matchedPairs}/${this.cards.length / 2}`,
        {
          fontSize: "20px",
          color: "#ffffff",
        }
      )
      .setOrigin(0.5);

    // Botão de reiniciar
    const restartButton = this.add
      .text(650, 550, "Reiniciar", {
        fontSize: "18px",
        backgroundColor: "#333333",
        padding: { x: 10, y: 5 },
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.restart();
      });

    // Botão de voltar
    const backButton = this.add
      .text(750, 550, "Voltar", {
        fontSize: "18px",
        backgroundColor: "#333333",
        padding: { x: 10, y: 5 },
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.stop();
        this.scene.resume("MuseumScene");
      });
  }

  update() {
    // Atualizar contador
    this.pairsText.setText(
      `Pares: ${this.matchedPairs}/${this.cards.length / 2}`
    );
  }
}
