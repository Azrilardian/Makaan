const darkColor = (header) => header.classList.remove('darkest');

const darkestColor = (header) => header.classList.add('darkest');

const NavDynamicColorInit = (window, header) => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) return darkestColor(header);
    return darkColor(header);
  });
};

export default NavDynamicColorInit;
