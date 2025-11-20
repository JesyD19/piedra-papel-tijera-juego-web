import { initPageWelcome } from "./pages/welcome/welcome";
import { initPageInstructions } from "./pages/instructions/instructions";
import { initPageChoice } from "./pages/choice/choice";
import { initPageChoices } from "./pages/choices/choices";
import { initPageComputerYouChoice } from "./pages/computer-you-choice/computer-you-choice";
import { initPageResult } from "./pages/result/result";

const routes = [
  { path: /#\/welcome/, page: initPageWelcome },
  { path: /#\/instructions/, page: initPageInstructions },
  { path: /#\/choice/, page: initPageChoice },
  { path: /#\/computer-you-choice/, page: initPageComputerYouChoice },
  { path: /#\/result/, page: initPageResult },
];

export function initRouter(container: Element) {
  function goTo(path) {
    /* history.pushState({}, "", path); */ //pushState para que no se recargue la página, cambia la ruta despues de la barra / en el navegador
    location.hash = path;
    handleRoute(path);
  }

  function handleRoute(route) {
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

  // Escuchar cambios en el hash
  window.addEventListener("hashchange", () => {
    handleRoute(location.hash);
  });

  // Inicializar en la ruta de bienvenida
  if (location.hash === "") {
    goTo("/welcome");
  } else {
    handleRoute(location.hash);
  }

  /*  if (location.pathname === "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  } */
}
