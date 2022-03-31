import CONFIG from './config';

const API_ENDPOINT = {
	RESTAURANTS: `${CONFIG.BASE_URL}/list`,
	DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
	PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}${pictureId}`,
};

export default API_ENDPOINT;
