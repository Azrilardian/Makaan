/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const getRestaurant = async (id) => {
  if (!id) return;
  return (await dbPromise).get(OBJECT_STORE_NAME, id);
};
const getAllRestaurant = async () => (await dbPromise).getAll(OBJECT_STORE_NAME);
const putRestaurant = async (movie) => {
  if (!Object.prototype.hasOwnProperty.call(movie, 'id')) return;
  return (await dbPromise).put(OBJECT_STORE_NAME, movie);
};
const deleteRestaurant = async (id) => (await dbPromise).delete(OBJECT_STORE_NAME, id);

export {
  getRestaurant,
  getAllRestaurant,
  putRestaurant,
  deleteRestaurant,
};
