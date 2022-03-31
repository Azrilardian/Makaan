import { createHomeTemplate, createRestaurantCardTemplate } from '../templates/template-creator';
import { restaurants as allRestaurants } from '../data/restaurants-source';

const Home = {
  async render() {
    return createHomeTemplate();
  },

  async afterRender() {
    const restaurants = await allRestaurants();
    const restaurantCards = document.querySelector('.restaurants__cards');
    restaurants.map(
      ({
        name, id, pictureId, description, city, rating,
      }, index) => (restaurantCards.innerHTML += createRestaurantCardTemplate({
        name,
        id,
        description,
        pictureId,
        city,
        rating,
        index,
      })),
    );
  },
};

export default Home;
