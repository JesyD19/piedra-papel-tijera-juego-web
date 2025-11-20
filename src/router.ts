/* import { initPageWelcome } from "./pages/welcome/welcome";
import { initPageInstructions } from "./pages/instructions/instructions";
import { initPageChoice } from "./pages/choice/choice";
import { initPageChoices } from "./pages/choices/choices";
import { initPageComputerYouChoice } from "./pages/computer-you-choice/computer-you-choice";
import { initPageResult } from "./pages/result/result"; */

/* const routes = [
  { path: /\/welcome/, page: initPageWelcome },
  { path: /\/instructions/, page: initPageInstructions },
  { path: /\/choice/, page: initPageChoice },
  { path: /\/computer-you-choice/, page: initPageComputerYouChoice },
  { path: /\/result/, page: initPageResult },
]; */

//export function initRouter(container: Element) {
//function goTo(path) {
/* history.pushState({}, "", path); */ //pushState para que no se recargue la página, cambia la ruta despues de la barra / en el navegador

//handleRoute(path);
//}

/* function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.page({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
 */
/* if (location.pathname === "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  } */
//}

import { initPageWelcome } from "./pages/welcome/welcome";
import { initPageInstructions } from "./pages/instructions/instructions";
import { initPageChoice } from "./pages/choice/choice";
import { initPageComputerYouChoice } from "./pages/computer-you-choice/computer-you-choice";
import { initPageResult } from "./pages/result/result";

const BASE_PATH = "/piedra-papel-tijera-juego-web";

const routes = [
  { path: /^\/welcome$/, page: initPageWelcome },
  { path: /^\/instructions$/, page: initPageInstructions },
  { path: /^\/choice$/, page: initPageChoice },
  { path: /^\/computer-you-choice$/, page: initPageComputerYouChoice },
  { path: /^\/result$/, page: initPageResult },
];

export function initRouter(container: Element) {
  function isGithubPages() {
    return location.host.includes("github.io");
  }

  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.page({ goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
        return;
      }
    }
  }

  // Inicializar en la ruta de bienvenida
  if (
    location.pathname === BASE_PATH ||
    location.pathname === BASE_PATH + "/"
  ) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}
