import { state } from "../../state";
import "../../components/button/buttton";
import youWin from "../../assets/resultado-ganaste.png";
import youLose from "../../assets/resultado-perdiste.png";
import "../../components/draw-star/draw-star";
import "../../components/score/score";

export function initPageResult(params) {
  /*  history.pushState(null, "", window.location.href);
  window.onpopstate = function (event) {
    history.pushState(null, "", window.location.href);
  }; */

  window.onpopstate = function (event) {
    if (!window.location.hash.includes("/welcome")) {
      history.pushState(null, "", window.location.href);
    }
  };

  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.gap = "30px";
  div.style.height = "100vh";
  const currentState = state.getState();
  const { computerPlay, myPlay } = currentState.currentGame;
  const winner = state.determineWinner(myPlay, computerPlay);
  const { myScore, computerScore, draw } = currentState.score;

  if (winner === "jugador") {
    div.style.backgroundColor = "var(--win)";
  } else if (winner === "computadora") {
    div.style.backgroundColor = "var(--lose)";
  } else {
    div.style.backgroundColor = "var(--draw)";
  }

  div.innerHTML = `
  ${
    winner === "jugador"
      ? `<img src="${youWin}">`
      : winner === "empate"
      ? `<draw-star></draw-star>`
      : `<img src="${youLose}">`
  }
  <score-element you="${myScore}" computer="${computerScore}" draw="${draw}"></score-element>
  <button-element></button-element>
`;

  const button = div.querySelector("button-element");
  button.addEventListener("playingAgain", () => params.goTo("/welcome"));

  return div;
}
