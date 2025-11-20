import stone from "../../assets/piedra.png";

export class Stone extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
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
      <img src="${stone}" alt="stone">
    `;

    const stoneHand = this.div.querySelector("img");
    stoneHand.addEventListener("click", () => {
      const eventChoosingStone = new CustomEvent("choosingStone");
      this.dispatchEvent(eventChoosingStone);
    });
  }
}

if (!customElements.get("stone-element")) {
  customElements.define("stone-element", Stone);
}
