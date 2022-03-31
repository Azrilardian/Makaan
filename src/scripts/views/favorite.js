import { createFavoriteRestaurantTemplate, createRestaurantCardTemplate, nothingFavoriteFoundTemplate } from '../templates/template-creator';
import { getAllRestaurant } from '../data/favouriterestaurant-idb';

const Favorite = {
  async render() {
    return createFavoriteRestaurantTemplate();
  },

  async afterRender() {
    const restaurants = await getAllRestaurant();
    const restaurantsCards = document.querySelector('.restaurants__cards');
    const nothingFavoriteFoundContainer = document.querySelector('.nothing-favorite-founds');
    restaurants.map(
      ({
        name, id, pictureId, description, city, rating,
      }, index) => (restaurantsCards.innerHTML += createRestaurantCardTemplate({
        name,
        id,
        description,
        pictureId,
        city,
        rating,
        index,
      })),
    );
    if (restaurants.length === 0) {
      nothingFavoriteFoundContainer.innerHTML = nothingFavoriteFoundTemplate();
    }
  },
};

export default Favorite;
