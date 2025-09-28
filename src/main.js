import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(res => {
      if (!res.data.hits.length) {
        iziToast.error({
          position: 'topRight',
          progressBar: false,
          timeout: 3000,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(res.data.hits);
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        progressBar: false,
        timeout: 3000,
        message: `${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}
