export class Countdown extends HTMLElement {
  shadow: ShadowRoot;
  circlesContainer: HTMLDivElement;
  outerCircle: HTMLDivElement;
  innerCircle: HTMLDivElement;
  countdown: number | undefined;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.circlesContainer = document.createElement("div");
    this.outerCircle = document.createElement("div");
    this.innerCircle = document.createElement("div");

    this.circlesContainer.classList.add("circles-container");
    this.outerCircle.classList.add("outer-circle");
    this.innerCircle.classList.add("inner-circle");

    const style = document.createElement("style");
    style.innerHTML = `
      .outer-circle {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 20px solid black;
      }
      .inner-circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        color: black;
        font-family: 'Odibee Sans', sans-serif;
      }

      .circles-container {
         display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
      }
    `;

    this.shadow.appendChild(style);
    this.render();
  }

  render() {
    this.shadow.innerHTML = "";

    let counter = 3;

    this.countdown = setInterval(() => {
      if (counter > 0) {
        this.innerCircle.style.fontSize = "80px";
        this.innerCircle.innerHTML = `${counter}`;
      } else {
        clearInterval(this.countdown);
        this.innerCircle.style.fontSize = "30px";
        this.innerCircle.innerHTML = "¡El tiempo se agotó!";

        const eventCountdownFinished = new CustomEvent("countdown-finished");
        this.dispatchEvent(eventCountdownFinished);
      }
      counter--;
    }, 1000);

    this.outerCircle.appendChild(this.innerCircle);
    this.circlesContainer.appendChild(this.outerCircle);
    this.shadow.appendChild(this.circlesContainer);
  }

  stopCountdown() {
    if (this.countdown) {
      clearInterval(this.countdown);
      this.countdown = undefined;
    }
  }
}

if (!customElements.get("countdown-element")) {
  customElements.define("countdown-element", Countdown);
}
