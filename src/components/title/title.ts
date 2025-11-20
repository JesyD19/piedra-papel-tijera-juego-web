export class Title extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
      div {
        display: flex;
        justify-content: center;
      }
      
      h1 {
        font-size: 80px;
        color: var(--verde);
        width: 308px;
        height: 270px;
        text-align: center;
      }

       .light-green {
        color: var(--title-color);
      }
    `;
    this.shadow.appendChild(style);
    this.text = this.getAttribute("text");
    this.parts = this.text.split("ó");
    this.render();
  }

  render() {
    this.div.innerHTML = `
      <h1>${this.parts[0]}<span class="light-green">ó</span> ${this.parts[1]}</h1>
    `;

    this.shadow.appendChild(this.div);
  }
}

if (!customElements.get("title-element")) {
  customElements.define("title-element", Title);
}
