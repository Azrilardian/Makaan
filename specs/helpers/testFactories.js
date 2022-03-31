import LikeButtonPresenter from '../../src/scripts/utils/likebutton';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter(document.querySelector('#likeButtonContainer'), movie);
};

export default createLikeButtonPresenterWithMovie;
