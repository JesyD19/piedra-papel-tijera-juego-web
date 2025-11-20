import paper from "../../assets/papel.png";

export class Paper extends HTMLElement {
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
      <img src="${paper}" alt="paper">
    `;

    const paperHand = this.div.querySelector("img");
    paperHand.addEventListener("click", () => {
      const eventChoosingPaper = new CustomEvent("choosingPaper");
      this.dispatchEvent(eventChoosingPaper);
    });
  }
}

if (!customElements.get("paper-element")) {
  customElements.define("paper-element", Paper);
}
