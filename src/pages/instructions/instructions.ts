import "../../components/text-instructions/text-instructions";
import "../../components/scissors/scissors";
import "../../components/stone/stone";
import "../../components/paper/paper";

export function initPageInstructions(params) {
  history.pushState(null, "", window.location.href);
  window.onpopstate = function (event) {
    history.pushState(null, "", window.location.href);
  };

  const div = document.createElement("div");
  div.classList.add("wallpaper");
  div.innerHTML = `
    <text-instructions text="Presiona jugar y elige: piedra, papel o tijera antes de que pasen los 3 segundos."></text-instructions>
    <button-element></button-element>
    <div class="hands-container">
      <scissors-element></scissors-element>
      <stone-element></stone-element>
      <paper-element></paper-element>
    </div>
  `;
  const buttonPlay = div.querySelector("button-element");
  buttonPlay.addEventListener("choiceRoute", () => {
    params.goTo("/choice");
  });
  return div;
}
