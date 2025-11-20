export class TextInstructions extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.innerHTML = ` 
      h6 {
        font-size: 40px;
        text-align: center;
        padding: 20px;
      }
    `;
    this.shadow.appendChild(style);
  }

  connectedCallback() {
     this.text = this.getAttribute("text");
     this.render();
  }

  render() {
    this.shadow.innerHTML += `
      <h6>${this.text}</h6>
    `;
  }
}

if (!customElements.get("text-instructions")) {
  customElements.define("text-instructions", TextInstructions);
}
