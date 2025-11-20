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

  setTimeout(() => {
    params.goTo("/result");
  }, 3000);

  return div;
}
