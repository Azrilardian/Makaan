const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Nothing Favourite Restaurant Founds', '.nothing-favorite-founds__text');

  I.amOnPage('/');

  I.seeElement('.restaurants__cards__card__info a');
  I.click(locate('.restaurants__cards__card__info a').first());

  const firstFilm = locate('.restaurants__cards__card__info__name span').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__cards__card');

  const likedFilmTitle = await I.grabTextFrom('.restaurants__cards__card__info__name span');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.seeElement('.restaurants__cards__card__info a');
  I.click(locate('.restaurants__cards__card__info a').first());

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // I.see('Nothing Favourite Restaurant Founds', '.nothing-favorite-founds__text');
});
