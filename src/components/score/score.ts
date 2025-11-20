export class Score extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    this.you = this.getAttribute("you");
    this.computer = this.getAttribute("computer");
    this.draw = this.getAttribute("draw");
    style.innerHTML = `
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 35vh;
        height: auto;
        border: 10px solid;
        gap: 15px;
       }

      .title{
        font-size: 40px;
       }
      
      .scores{
        font-size: 30px;
       }
    `;
    this.shadow.appendChild(style);
    this.div = document.createElement("div");
    this.shadow.appendChild(this.div);
    this.render();
  }

  render() {
    this.div.innerHTML = `
      <span class="title">Score</span>
      <span class="scores">Tú: ${this.you}</span>
      <span class="scores">Computadora: ${this.computer}</span>
      <span class="scores">Empate: ${this.draw}</span>
    `;
  }
}

if (!customElements.get("score-element")) {
  customElements.define("score-element", Score);
}
