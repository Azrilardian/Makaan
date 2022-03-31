import Detail from '../views/detail';
import Home from '../views/home';
import Favorite from '../views/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
