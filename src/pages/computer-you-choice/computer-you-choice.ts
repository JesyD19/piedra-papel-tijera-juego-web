import { state } from "../../state";
import "../../components/scissors/scissors";
import "../../components/stone/stone";
import "../../components/paper/paper";

export function initPageComputerYouChoice(params) {
  history.pushState(null, "", window.location.href);
  window.onpopstate = function (event) {
    history.pushState(null, "", window.location.href);
  };

  const div = document.createElement("div");
  div.classList.add("wallpaper");
  const currentState = state.getState();
  const { computerPlay, myPlay } = currentState.currentGame;

  div.innerHTML = `
    <div class="hands-container-computer ">${
      computerPlay === "tijera"
        ? "<scissors-element></scissors-element>"
        : computerPlay === "piedra"
        ? "<stone-element></stone-element>"
        : "<paper-element></paper-element>"
    }</div>
    <div class="hands-container"  >${
      myPlay === "tijera"
        ? "<scissors-element></scissors-element>"
        : myPlay === "piedra"
        ? "<stone-element></stone-element>"
        : "<paper-element></paper-element>"
    }</div>
  `;

  // Crear y mostrar el loader
  const loader = document.createElement("div");
  loader.innerText = "Cargando...";
  loader.style.position = "absolute";
  loader.style.top = "50%";
  loader.style.left = "50%";
  loader.style.transform = "translate(-50%, -50%)";
  loader.style.fontSize = "20px";
  loader.style.color = "#fff";
  loader.style.zIndex = "10";

  div.appendChild(loader);

  /* setTimeout(() => {
    params.goTo("/result");
  }, 3000); */

  setTimeout(() => {
    div.removeChild(loader);
    div.classList.add("fade-out");

    // Esperar a que termine la transición antes de redirigir
    setTimeout(() => {
      params.goTo("/result");
    }, 500); // Esperar 500ms para que el fade-out se vea
  }, 2000);

  return div;
}
