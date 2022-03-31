import {
  getRestaurant,
  getAllRestaurant,
  putRestaurant,
  deleteRestaurant,
} from '../src/scripts/data/favouriterestaurant-idb';
import createLikeButtonPresenterWithMovie from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('liking a movie', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the movie has not been liked before', async () => {
    await createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await getRestaurant(1);

    expect(movie).toEqual({ id: 1 });
    deleteRestaurant(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await createLikeButtonPresenterWithMovie({ id: 1 });

    await putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await getAllRestaurant()).toEqual([{ id: 1 }]);

    deleteRestaurant(1);
  });

  it('should not add a movie when it has no id', async () => {
    await createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await getAllRestaurant()).toEqual([]);
  });
});


// Test Case

// Menyukai Restaurant
// 1. Film belum disukai.
// 2. Widget untuk menyukai film ditampilkan
// 3. Widget menyukai film ditekan oleh pengguna.
// 4. Film ditambahkan ke daftar film yang disukai:
//    - Ternyata film sudah disukai:
//        - Tidak perlu menyimpan kembali.
//    - Data film tidak memiliki ID:
//        - Sistem tidak memproses penyimpanan.
//        - SIstem tidak gagal.

// Batal Menyukai Restaurant:
// 1. Film sudah disukai.
// 2. Widget untuk batal menyukai film ditampilkan.
// 3. Widget pembatalan ditekan oleh pengguna.
// 4. Film dihapus dari daftar film yang disukai:
//    - Ternyata film tidak ada dalam daftar film yang disukai