import axios from 'axios';

const API_KEY = '33973613-022fb77035f2ce6859c8ca7c0';

export async function fetchPhotos(name, page, limit) {
  let encoded = encodeURIComponent(name);

  let URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encoded +
    '&image_type=photo&orientation=horizontal&safesearch=true&page=' +
    page +
    '&per_page=' +
    limit;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}
