const toggleDrawer = (drawer, event) => {
  event.stopPropagation();
  drawer.classList.toggle('open');
};

const closeDrawer = (drawer, event) => {
  event.stopPropagation();
  drawer.classList.remove('open');
};

const DrawerInit = ({ button, drawer, content }) => {
  button.addEventListener('click', (event) => toggleDrawer(drawer, event));
  content.addEventListener('click', (event) => closeDrawer(drawer, event));
};

export default DrawerInit;
