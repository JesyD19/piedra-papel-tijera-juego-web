import scissors from "../../assets/tijera.png";

export class Scissors extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.height = this.getAttribute("height");
    const style = document.createElement("style");
    style.innerHTML = `
      img {
        padding: 0;
        margin: 0;
        height: 100px;
      }
    `;
    this.shadow.appendChild(style);
    this.div = document.createElement("div");
    this.shadow.appendChild(this.div);
    this.render();
  }

  render() {
    this.div.innerHTML = `
      <img src="${scissors}" alt="scissors">
    `;

    const scissor = this.div.querySelector("img");
    scissor.addEventListener("click", () => {
      const eventChoosingScissors = new CustomEvent("choosingScissors");
      this.dispatchEvent(eventChoosingScissors);
    });
  }
}

if (!customElements.get("scissors-element")) {
  customElements.define("scissors-element", Scissors);
}
