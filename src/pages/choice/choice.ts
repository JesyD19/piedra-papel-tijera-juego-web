import "../../components/countdown/countdown";
import "../../components/scissors/scissors";
import "../../components/stone/stone";
import "../../components/paper/paper";
import { state } from "../../state";

export function initPageChoice(params) {
  history.pushState(null, "", window.location.href);
  /*  window.onpopstate = function (event) {
    history.pushState(null, "", window.location.href);
  }; */

  const div = document.createElement("div");
  div.classList.add("wallpaper");

  div.innerHTML = `
    <countdown-element></countdown-element>
     <div class="hands-container">
      <scissors-element></scissors-element>
      <stone-element></stone-element>
      <paper-element></paper-element>
    </div>
  `;

  const countdownElement = div.querySelector("countdown-element");
  const scissorsElement = div.querySelector("scissors-element");
  const stoneElement = div.querySelector("stone-element");
  const paperElement = div.querySelector("paper-element");

  function transformElem(element) {
    element.style.transformOrigin = "bottom";
    element.style.transform = "scaleY(2)";
  }

  function filterElem(arrElements) {
    arrElements.forEach((el) => (el.style.filter = "brightness(1.5"));
  }

  const onChoosingScissors = () => {
    transformElem(scissorsElement);
    filterElem([stoneElement, paperElement]);

    countdownElement.stopCountdown();

    stoneElement.removeEventListener("choosingStone", onChoosingStone);
    paperElement.removeEventListener("choosingPaper", onChoosingPaper);

    state.setGame({
      computerPlay: state.choiceComputer(),
      myPlay: "tijera",
    });

    setTimeout(() => {
      params.goTo("/computer-you-choice");
    }, 1000);
  };

  scissorsElement.addEventListener("choosingScissors", onChoosingScissors);

  const onChoosingStone = () => {
    transformElem(stoneElement);
    filterElem([scissorsElement, paperElement]);

    countdownElement.stopCountdown();

    scissorsElement.removeEventListener("choosingScissors", onChoosingScissors);
    paperElement.removeEventListener("choosingPaper", onChoosingPaper);

    state.setGame({
      computerPlay: state.choiceComputer(),
      myPlay: "piedra",
    });

    setTimeout(() => {
      params.goTo("/computer-you-choice");
    }, 1000);
  };

  stoneElement.addEventListener("choosingStone", onChoosingStone);

  const onChoosingPaper = () => {
    transformElem(paperElement);
    filterElem([scissorsElement, stoneElement]);

    countdownElement.stopCountdown();

    scissorsElement.removeEventListener("choosingScissors", onChoosingScissors);
    stoneElement.removeEventListener("choosingStone", onChoosingStone);

    state.setGame({
      computerPlay: state.choiceComputer(),
      myPlay: "papel",
    });

    setTimeout(() => {
      params.goTo("/computer-you-choice");
    }, 1000);
  };

  paperElement.addEventListener("choosingPaper", onChoosingPaper);

  const onCountdownFinished = () => {
    scissorsElement.removeEventListener("choosingScissors", onChoosingScissors);
    stoneElement.removeEventListener("choosingStone", onChoosingStone);
    paperElement.removeEventListener("choosingPaper", onChoosingPaper);

    setTimeout(() => {
      params.goTo("/welcome");
    }, 1000);
  };

  countdownElement.addEventListener("countdown-finished", onCountdownFinished);

  window.onpopstate = function (event) {
    countdownElement.stopCountdown();
    console.log("Countdown detenido por navegación");

    countdownElement.render();

    params.goTo(location.pathname);
  };

  return div;
}
