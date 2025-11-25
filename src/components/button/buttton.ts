import beginButton from "../../assets/boton-empezar.png";
import playButton from "../../assets/boton-jugar.png";
import playingAgain from "../../assets/boton-volver-a-jugar.png";

export class Button extends HTMLElement {
  shadow: ShadowRoot;
  BASE_PATH: string;

  constructor() {
    super();
    this.BASE_PATH = location.hostname.includes("github.io")
      ? "/piedra-papel-tijera-juego-web"
      : "";
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.innerHTML = `
      div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
      }

      div img {
        max-width: 100%;
        height: auto;
        display: block;
      
      }
    `;
    this.shadow.appendChild(style);
    this.div = document.createElement("div");
    this.shadow.appendChild(this.div);
    this.render();
  }

  getCleanPath() {
    return location.pathname.replace(this.BASE_PATH, "");
  }

  render() {
    this.div.innerHTML = `
      <img src="${
        this.getCleanPath() === "/welcome"
          ? beginButton
          : this.getCleanPath() === "/result"
          ? playingAgain
          : playButton
      }">
    `;

    const button = this.div.querySelector("img");
    button.addEventListener("click", () => {
      const eventInstructions = new CustomEvent("instructionsRoute");
      const eventChoice = new CustomEvent("choiceRoute");
      const eventPlayingAgain = new CustomEvent("playingAgain");

      this.dispatchEvent(eventInstructions);
      this.dispatchEvent(eventChoice);
      this.dispatchEvent(eventPlayingAgain);
    });
  }
}

if (!customElements.get("button-element")) {
  customElements.define("button-element", Button);
}
