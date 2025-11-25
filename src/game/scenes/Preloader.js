import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(512, 384, "background");

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    this.registry.set("jogoDaMemoriaInicialConcluido", false);
    this.registry.set("jogoMemoriaCarrocaConcluido", false);
    this.registry.set("jogoMemoriaCinemaConcluido", false);
    this.registry.set("jogoMemoriaIndigenaConcluido", false);

    //Inicio
    this.load.image("logo", "/assets/logo.jpg");
    this.load.image("controles_imagem", "/assets/controles.png");
    this.load.image("historia_imagem", "/assets/historia.png");

    //Salas
    this.load.image(
      "sala_principal",
      "/assets/salas/TemplateSalaPrincipalJogo.png"
    );
    this.load.image(
      "sala_indigena",
      "/assets/salas/TemplateSalaPatIndigenaJogo.png"
    );
    this.load.image(
      "sala_material",
      "/assets/salas/TemplateSalaPatMaterialJogo.png"
    );
    this.load.image("corredor", "/assets/salas/TemplateSalaCorredorJogo.png");
    this.load.image(
      "sala_carroca",
      "/assets/salas/TemplateSalaCarrocaJogo.png"
    );
    this.load.image("sala_chas", "/assets/salas/TemplateSalaChasJogo.png");
    this.load.image("sala_cinema", "/assets/salas/TemplateSalaCinemaJogo.png");
    this.load.spritesheet(
      "character",
      "/assets/personagens/Download43242.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
    //Salas pos
    this.load.image(
      "sala_chas_pos",
      "/assets/salas/TemplateSalaChasJogoPos.png"
    );
    this.load.image(
      "sala_carroca_pos",
      "/assets/salas/TemplateSalaCarrocaJogoPos.png"
    );
    this.load.image(
      "sala_indigena_pos",
      "/assets/salas/TemplateSalaPatIndigenaJogoPos.png"
    );
    // Carregar imagens dos artefatos
    const artefatos = [
      // "vaso",
      // "carroça",
      "canoa",
      "espada",
      // "carranca",
      "onca",
    ];
    artefatos.forEach((artefato) => {
      this.load.image(artefato, `assets/artefatos/${artefato}.png`);
    });
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
  }
}
