import API_ENDPOINT from '../globals/api-endpoint';

const restaurants = async () => {
	const response = await fetch(API_ENDPOINT.RESTAURANTS);
	const responseJson = await response.json();

	return responseJson.restaurants;
};

const detailRestaurants = async (id) => {
	const response = await fetch(API_ENDPOINT.DETAIL(id));
	const responseJson = await response.json();
	return responseJson.restaurant;
};

export { restaurants, detailRestaurants };
