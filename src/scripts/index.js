import 'regenerator-runtime'; /* for async await transpile */

// Styles
import '../styles/sass/main.scss';
import '../styles/sass/detail.scss';
import '../styles/sass/fonts.scss';
import '../styles/sass/responsive.scss';
import '../styles/sass/favorite.scss';

// Script
import { app, renderPage } from './views/app';
import swRegister from './utils/sw-register';

app({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#root'),
  window,
});

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('load', () => {
  renderPage();
  swRegister();
});
