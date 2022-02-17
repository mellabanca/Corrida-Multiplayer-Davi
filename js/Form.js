class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  setElementsPosition(){
    this.input.position(width/2-100, height/2-80);
    this.playButton.position(width/2-90, height/2-20);
    this.titleImg.position(120, 160);
    this.greeting.position(width/2-300, height/2-100);
  }

  setElementsStyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
  }

  display(){
    this.setElementsPosition();
    this.setElementsStyle();
  }

}
