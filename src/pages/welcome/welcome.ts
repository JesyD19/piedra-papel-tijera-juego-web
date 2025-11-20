import "../../components/title/title";
import "../../components/button/buttton";
import "../../components/scissors/scissors";
import "../../components/stone/stone";
import "../../components/paper/paper";

export function initPageWelcome(params) {
  history.pushState(null, "", window.location.href);
  window.onpopstate = function (event) {
    history.pushState(null, "", window.location.href);
  };

  const div = document.createElement("div");
  div.classList.add("wallpaper");
  div.innerHTML = `
      <div class="title-container">
        <title-element text="Piedra, Papel ó Tijera"></title-element>
      </div>
      <div class="button-container">
        <button-element class="button-container"></button-element>
      </div>
      <div class="hands-container">
        <scissors-element></scissors-element>
        <stone-element></stone-element>
        <paper-element></paper-element>
      </div>
    `;

  const buttonElement = div.querySelector("button-element");
  buttonElement.addEventListener("instructionsRoute", () => {
    params.goTo("/instructions");
  });

  return div;
}
