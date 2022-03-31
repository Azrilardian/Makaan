/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import {
  createDetailTemplate,
  createDetailLeftSection,
  createDetailRightSection,
  createDetailFoodsMenuTemplate,
  createDetailTestimonialsTemplate,
  createDetailDrinksMenuTemplate,
} from '../templates/template-creator';
import { parseActiveUrlWithoutCombiner } from '../routes/url-parser';
import { detailRestaurants } from '../data/restaurants-source';
import LikeButtonPresenter from '../utils/likebutton';
import SliderInit from '../utils/slider';

const Detail = {
  async render() {
    return createDetailTemplate();
  },

  async afterRender() {
    const url = parseActiveUrlWithoutCombiner();
    const restaurant = await detailRestaurants(url.id);
    const restaurantDetailLeft = document.querySelector('.detail__left');
    const restaurantDetailRight = document.querySelector('.detail__right');
    const restaurantDetailFoodsMenu = document.querySelector('.menu__cards--foods');
    const restaurantDetailDrinksMenu = document.querySelector('.menu__cards--drinks');
    const restaurantDetailTestimonials = document.querySelector('.testimonials__testimonial__contents-wrap__contents');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // const likeButton = document.querySelector('#likeButtonContainer .like');
    const restaurantExtract = {
      name: restaurant.name,
      id: restaurant.id,
      description: restaurant.description,
      pictureId: restaurant.pictureId,
      city: restaurant.city,
      rating: restaurant.rating,
    };

    LikeButtonPresenter(likeButtonContainer, restaurantExtract);
    restaurantDetailLeft.innerHTML = createDetailLeftSection(restaurant);
    restaurantDetailRight.innerHTML = createDetailRightSection(restaurant);
    restaurant.menus.foods.map(({ name }) => restaurantDetailFoodsMenu.innerHTML += createDetailFoodsMenuTemplate(name));
    restaurant.menus.drinks.map(({ name }) => (restaurantDetailDrinksMenu.innerHTML += createDetailDrinksMenuTemplate(name)));
    restaurant.customerReviews.map(({ name, review, date }) => restaurantDetailTestimonials.innerHTML += createDetailTestimonialsTemplate({ name, review, date }));

    // for slider
    const lastTestimonials = restaurant.customerReviews[0];
    restaurantDetailTestimonials.innerHTML += createDetailTestimonialsTemplate({
      name: lastTestimonials.name, review: lastTestimonials.review, date: lastTestimonials.date, id: 'first-clone',
    });
    SliderInit();
  },
};

export default Detail;
