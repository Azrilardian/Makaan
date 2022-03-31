import {
  getRestaurant, putRestaurant, deleteRestaurant,
} from '../data/favouriterestaurant-idb';
import { createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate } from '../templates/template-creator';

async function isRestaurantExist(id) {
  const restaurant = await getRestaurant(id);
  return !!restaurant;
}

async function renderButton(container, restaurant) {
  function renderLike() {
    container.innerHTML = createLikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await putRestaurant(restaurant);
      renderButton(container, restaurant);
    });
  }

  function renderLiked() {
    container.innerHTML = createUnlikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await deleteRestaurant(restaurant.id);
      renderButton(container, restaurant);
    });
  }

  if (await isRestaurantExist(restaurant.id)) return renderLiked(container, restaurant);
  return renderLike(container, restaurant);
}

async function LikeButtonPresenter(container, restaurant) {
  await renderButton(container, restaurant);
}

export default LikeButtonPresenter;
