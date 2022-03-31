// ? Function App dibuat bertujuan untuk menginisiasikan komponen-komponen

import DrawerInit from '../utils/drawer';
import NavDynamicColorInit from '../utils/nav-dynamic-color';
import { parseActiveUrlWithCombiner } from '../routes/url-parser';
import routes from '../routes/routes';

const app = ({
  button, drawer, content, window,
}) => {
  const initialAppShell = () => {
    DrawerInit({
      button,
      drawer,
      content,
    });
    NavDynamicColorInit(window, drawer);
  };

  initialAppShell();
};

const renderPage = async () => {
  const root = document.querySelector('#root');
  const url = parseActiveUrlWithCombiner();
  const page = routes[url];
  window.scrollTo(0, 0);
  root.innerHTML = await page.render();
  await page.afterRender();
};

export { app, renderPage };
