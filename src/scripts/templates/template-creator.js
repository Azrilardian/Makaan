import API_ENDPOINT from '../globals/api-endpoint';

const createHomeTemplate = () => `
    <section class="jumbotron" id="jumbotron">
        <div class="container">
            <div class="jumbotron-wrap">
                <h1 class="jumbotron__heading">Makaan</h1>
                <p class="jumbotron__text paragraph">Lihat menu baru dan spesial dari kami, atau cari makanan dan minuman di restaurant favoritmu dan pesan sekarang juga!</p>
                <div class="jumbotron__button-wrap">
                    <button class="button button--white">Menu</button>
                    <button class="button button--blue">Coupon</button>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <div class="about-wrap">
                <div class="about__img">
                    <picture>
                        <source media="(max-width : 768px)" srcset="./images/introduction-vector-small.webp">
                        <img loading="lazy" src="./images/introduction-vector-large.webp" alt="about-vector-img" />
                    </picture>
                </div>
                <div class="about__text">
                    <div class="heading__text heading__text--about">
                        <small>Greeting and Greeting</small>
                        <h1>What Us ?</h1>
                    </div>
                    <p class="about__text__paragraph paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit vestibulum lorem quis mattis. Sed diam mi, ornare aliquet sollicitudin non, tempor vel
                        massa. Proin quis libero tincidunt mauris dapibus euismod sed vitae arcu.
                    </p>
                </div>
            </div>
        </div>
        <img src="./images/blog-1-small.webp" alt="" class="about__bubble-img about__bubble-img--right" />
        <img src="./images/blob-2-small.webp" alt="" class="about__bubble-img about__bubble-img--left" />
    </section>
    <section class="menu" id="menu">
        <div class="container">
            <div class="menu-wrap">
                <div class="menu__text">
                    <div class="heading__text heading__text--menu">
                        <small>See What We Have</small>
                        <h1>Catalog</h1>
                    </div>
                </div>
                <div class="menu__cards">
                    <div class="menu__cards__card">
                        <picture class="menu__cards__card__picture-wrap">
                            <source media="(max-width : 768px)" srcset="./images/pizza-large.webp">
                            <img loading="lazy" src="./images/pizza-small.webp" alt="pizza-img" class="menu__cards__card__picture-wrap__img" />
                        </picture>
                        <div class="menu__cards__card__text">
                            <p class="menu__cards__card__text__name">Indonesia Pizza</p>
                            <p class="menu__cards__card__text__price">33K</p>
                            <p class="menu__cards__card__text__description paragraph">
                                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation
                            </p>
                        </div>
                        <button class="button button--blue">GET NOW</button>
                    </div>
                    <div class="menu__cards__card">
                        <picture class="menu__cards__card__picture-wrap">
                            <source media="(max-width : 768px)" srcset="./images/pizza-large.webp">
                            <img loading="lazy" src="./images/pizza-small.webp" alt="pizza-img" class="menu__cards__card__picture-wrap__img" />
                        </picture>
                        <div class="menu__cards__card__text">
                            <p class="menu__cards__card__text__name">Indonesia Pizza</p>
                            <p class="menu__cards__card__text__price">33K</p>
                            <p class="menu__cards__card__text__description paragraph">
                                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation
                            </p>
                        </div>
                        <button class="button button--blue">GET NOW</button>
                    </div>
                    <div class="menu__cards__card">
                        <picture class="menu__cards__card__picture-wrap">
                            <source media="(max-width : 768px)" srcset="./images/pizza-large.webp">
                            <img loading="lazy" src="./images/pizza-small.webp" alt="pizza-img" class="menu__cards__card__picture-wrap__img" />
                        </picture>
                        <div class="menu__cards__card__text">
                            <p class="menu__cards__card__text__name">Indonesia Pizza</p>
                            <p class="menu__cards__card__text__price">33K</p>
                            <p class="menu__cards__card__text__description paragraph">
                                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation
                            </p>
                        </div>
                        <button class="button button--blue">GET NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="new-menu">
        <div class="container">
            <div class="new-menu-wrap">
                <div class="new-menu__text">
                    <div class="heading__text heading__text--new-menu">
                        <small>All Menu Special for You</small>
                        <h1>New Menu</h1>
                    </div>
                </div>
                <div class="new-menu__card">
                    <div class="new-menu__card__text">
                        <h2 class="new-menu__card__text__name">Burger With You</h2>
                        <p class="new-menu__card__text__price">33K</p>
                        <p class="new-menu__card__text__description paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                        </p>
                        <div class="new-menu__card__button-wrap">
                            <button class="button button--yellow">BUY NOW</button>
                            <button class="button button--blue">BUT LATER</button>
                        </div>
                    </div>
                    <picture class="new-menu__card__picture">
                        <source media="(max-width : 768px)" srcset="./images/burger-1-large.webp">
                        <img src="./images/burger-1-small.webp" alt="burger-img" class="new-menu__card__picture__img" loading="lazy" />
                    </picture>
                </div>
            </div>
        </div>
    </section>
    <section class="restaurants" id="restaurants">
        <div class="container">
            <div class="restaurants-wrap">
                <div class="restaurants__text">
                    <div class="heading__text heading__text--restaurants">
                        <small>Visit your favorite restaurant</small>
                        <h1>All Restaurant</h1>
                    </div>
                </div>
                <div class="restaurants__cards"></div>
                <button class="button button--blue">All Restaurant</button>
            </div>
        </div>
    </section>
    <section class="coupon">
        <div class="container">
            <div class="coupon-wrap">
                <picture class="coupon__picture-wrap">
                    <source media="(max-width : 768px)" srcset="./images/pizza-coupon-large.webp">
                    <img src="./images/pizza-coupon-small.webp" alt="pizza-img" class="coupon__picture-wrap__img" loading="lazy"  />
                </picture>
                <div class="coupon__text">
                    <div class="heading__text heading__text--coupon">
                        <small>Reedem and get 20% Discount</small>
                        <h1>Have Coupon ?</h1>
                    </div>
                    <p class="coupon__text__description paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div class="coupon__text__input-wrap">
                        <input type="text" placeholder="Reedem here" class="coupon__text__input-wrap__input" />
                        <button>REEDEM</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const createRestaurantCardTemplate = ({ name, id, description, pictureId, city, rating, index }) => `
    <div class="restaurants__cards__card restaurant${++index}" tabindex="0">
        <picture class="restaurants__cards__card__picture-wrap">
            <img src=${API_ENDPOINT.PICTURE(
							pictureId
						)} alt="${name}" class="restaurants__cards__card__picture-wrap__img" loading="lazy" />
        </picture>
        <div class="restaurants__cards__card__info">
            <p class="restaurants__cards__card__info__name">Name : <span>${name}</span></p>
            <p class="restaurants__cards__card__info__description">Description : ${description.slice(0, 150)}...</p>
            <p class="restaurants__cards__card__info__city">City : ${city}</p>
            <p class="restaurants__cards__card__info__rating">Rating : ${rating}</p>
            <button class="button button--yellow"><a href="${`/#/detail/${id}`}">Detail</a></button>
        </div>
    </div>
`;

const createDetailTemplate = () => `
    <section class="detail">
        <div class="container">
            <div class="detail-wrap">
                <div class="detail__left"></div>
                <div class="detail__right"></div>
            </div>
        </div>
        <div class="detail__path"></div>
    </section>
    <section class="menus">
        <div class="container">
            <div class="menus-wrap">
                <div class="menus__text">
                    <div class="heading__text heading__text--menus">
                        <small>All Menu Special For You</small>
                        <h1>Menu</h1>
                    </div>
                </div>
                <div class="menus__categories">
                    <div class="menus__categories__category">
                        <p class="menus__categories__category__tagline">ALL FOODS</p>
                        <div class="menu__cards menu__cards--foods"></div>
                    </div>
                    <div class="menus__categories__category">
                        <p class="menus__categories__category__tagline">ALL DRINKS</p>
                        <div class="menu__cards menu__cards--drinks"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="testimonials">
        <div class="container">
            <div class="testimonials-wrap">
                <div class="testimonials__text">
                    <div class="heading__text heading__text--testimonials">
                        <small>Look How Good We Are</small>
                        <h1>Testimonials</h1>
                    </div>
                </div>
                <div class="testimonials__testimonial">
                    <div class="testimonials__testimonial__contents-wrap">
                        <div class="testimonials__testimonial__contents-wrap__contents"></div>
                    </div>
                    <div class="testimonials__testimonial__indicators">
                        <span class="testimonials__testimonial__indicators__indicator testimonials__testimonial__indicators__indicator--active"></span>
                        <span class="testimonials__testimonial__indicators__indicator"></span>
                        <span class="testimonials__testimonial__indicators__indicator"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="send-reviews">
        <div class="container">
            <div class="send-reviews-wrap">
                <div class="send-reviews__text">
                    <div class="heading__text heading__text--send-reviews">
                        <small>Favorite or Favorite</small>
                        <h1>Send Reviews</h1>
                    </div>
                </div>
                <div class="send-reviews__inputs">
                    <div class="send-reviews__inputs__name">
                        <p class="send-reviews__inputs__tagline">Your Name</p>
                        <input type="text" class="send-reviews__inputs__input" />
                    </div>
                    <div class="send-reviews__inputs__email">
                        <p class="send-reviews__inputs__tagline">Your Email</p>
                        <input type="text" class="send-reviews__inputs__input" />
                    </div>
                    <div class="send-reviews__inputs__review">
                        <p class="send-reviews__inputs__tagline">Your Review</p>
                        <textarea name="review" class="send-reviews__inputs__input send-reviews__inputs__input--review"></textarea>
                    </div>
                </div>
                <button class="button button--blue">SEND</button>
            </div>
        </div>
        <picture class="send-reviews__picture-wrap send-reviews__picture-wrap--left">
            <source media="(max-width : 768px)" srcset="./images/pizza-coupon-large.webp">
            <img src="./images/pizza-coupon-small.webp" alt="pizza-img" class="send-reviews__picture-wrap__img" loading="lazy" />
        </picture>
        <picture class="send-reviews__picture-wrap send-reviews__picture-wrap--right">
            <source media="(max-width : 768px)" srcset="./images/pizza-coupon-large.webp">
            <img src="./images/pizza-coupon-small.webp" alt="pizza-img" class="send-reviews__picture-wrap__img" loading="lazy" />
        </picture>
    </section> 
    <div id="likeButtonContainer">
     <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
     </button>
    </div>
`;

const createDetailLeftSection = ({ address, name, description, categories }) => `
    <small class="detail__left__location">${address}</small>
    <h3 class="detail__left__name">${name}</h3>
    <p class="detail__left__description paragraph">
        ${description}
    </p>
    <div class="detail__left__categories">
        ${categories.map(({ name: category }) => `<span class="detail__left__categories__category">${category}</span>`)}
    </div>
`;

const createDetailRightSection = ({ name, pictureId, address, rating }) => `
    <picture class="detail__right__picture-wrap">
        <img src="${API_ENDPOINT.PICTURE(
					pictureId
				)}" alt=${name} class="detail__right__picture-wrap__img" loading="lazy" />
    </picture>
    <div class="detail__right__cards">
        <div class="detail__right__cards__card detail__right__cards__card--center">
            <span class="detail__right__cards__card__icon"><i class="fa fa-map-marker"></i></span>
            <p class="detail__right__cards__card__content">${address}</p>
            <small class="detail__right__cards__card__tagline">Location</small>
        </div>
        <div class="detail__right__cards__card">
            <span class="detail__right__cards__card__icon"><i class="fa fa-star"></i></span>
            <p class="detail__right__cards__card__content">${rating}</p>
            <small class="detail__right__cards__card__tagline">Rating</small>
        </div>
    </div>
`;

const createDetailFoodsMenuTemplate = (name) => `
    <div class="menu__cards__card">
        <picture class="menu__cards__card__picture-wrap">
            <source media="(max-width : 768px)" srcset="./images/burger-2-large.webp">
            <img src="./images/burger-2-small.webp" alt="pizza-img" class="menu__cards__card__picture-wrap__img" loading="lazy"  />
        </picture>
        <div class="menu__cards__card__text">
            <p class="menu__cards__card__name">${name}</p>
            <p class="menu__cards__card__price">28K</p>
            <p class="menu__cards__card__description paragraph">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation
            </p>
        </div>
        <button class="button button--blue">GET NOW</button>
    </div>
`;

const createDetailDrinksMenuTemplate = (name) => `
    <div class="menu__cards__card">
        <picture class="menu__cards__card__picture-wrap">
            <source media="(max-width : 768px)" srcset="./images/drink-large.webp">
            <img src="./images/drink-small.webp" alt="pizza-img" class="menu__cards__card__picture-wrap__img" loading="lazy" />
        </picture>
        <div class="menu__cards__card__text">
            <p class="menu__cards__card__name">${name}</p>
            <p class="menu__cards__card__price">28K</p>
            <p class="menu__cards__card__description paragraph">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation
            </p>
        </div>
        <button class="button button--blue">GET NOW</button>
    </div>
`;

const createDetailTestimonialsTemplate = ({ name, review, date, id = 'none' }) => `
    <div class="testimonials__testimonial__contents-wrap__contents__content" id=${id}>
        <picture class="testimonials__testimonial__contents-wrap__contents__content__picture-wrap">
            <source media="(max-width : 768px)" srcset="./images/crop-large.webp">
            <img src="./images/crop-small.webp" alt="" class="testimonials__testimonial__contents-wrap__contents__content__picture-wrap__img" loading="lazy" />
        </picture>
        <p class="testimonials__testimonial__contents-wrap__contents__content__name">${name}</p>
        <p class="testimonials__testimonial__contents-wrap__contents__content__as">Consumer</p>
        <p class="testimonials__testimonial__contents-wrap__contents__content__say paragraph">${review}</p>
        <p class="testimonials__testimonial__contents-wrap__contents__content__date">${date}</p>
    </div>
`;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like fixed">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like fixed">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoriteRestaurantTemplate = () => `
    <section class="favorite-restaurants" id="favorite-restaurants">
        <div class="favorite-restaurants-wrap">
            <div class="favorite-restaurants__heading">
                <div class="favorite-restaurants__text">
                    <div class="heading__text heading__text--favorite-restaurants">
                        <small>Look Back What You Like</small>
                        <h1>Favorite Restaurant</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="restaurants__cards"></div>
                <div class="nothing-favorite-founds"></div>
            </div>
        </div>
    </section>
`;

const nothingFavoriteFoundTemplate = () => `
    <picture class='nothing-favorite-founds__picture-wrap'>
        <img src="./images/takeout-small.webp" alt="nothing-favorite-found-image" class="nothing-favorite-founds__picture-wrap__img" loading="lazy">
    </picture>
    <p class="nothing-favorite-founds__text">Nothing Favourite Restaurant Founds</p>
`;

export {
	createHomeTemplate,
	createDetailTemplate,
	createDetailLeftSection,
	createDetailRightSection,
	createDetailFoodsMenuTemplate,
	createDetailDrinksMenuTemplate,
	createDetailTestimonialsTemplate,
	createRestaurantCardTemplate,
	createLikeMovieButtonTemplate,
	createUnlikeMovieButtonTemplate,
	createFavoriteRestaurantTemplate,
	nothingFavoriteFoundTemplate,
};
