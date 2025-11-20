export class DrawStar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
        <polygon
          points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
          fill="#f564e2ff"
          stroke="black"
          stroke-width="1"
          transform="rotate(-15 12 12) scale(1.1, 1.1) translate(0, -1)"
        />
        <text
          x="12"
          y="13"
          font-size="3"
          text-anchor="middle"
          fill="white"
          font-family="Arial"
          font-weight="bold"
          dominant-baseline="middle"
        >
          Empataste
        </text>
        </svg> 
      </div>
    `;
  }
}

if (!customElements.get("draw-star")) {
  customElements.define("draw-star", DrawStar);
}
