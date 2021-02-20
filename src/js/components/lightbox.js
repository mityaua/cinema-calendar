import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { listRef } from '../references/refs';

listRef.addEventListener('click', openModal);

// Open lightbox
function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const img = `<img src= ${event.target.src}>`;
  const instance = basicLightbox.create(img);

  instance.show();
  window.addEventListener('keydown', closeModal);

  // Close lightbox
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModal);
    }
  }
}
