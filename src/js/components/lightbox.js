import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { listRef } from '../references/refs';

listRef.addEventListener('click', openModal);

// Open lightbox
function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  NProgress.start();

  const img = `<img src= ${event.target.src}>`;
  const instance = basicLightbox.create(img);
  instance.show();

  NProgress.done(true);
  window.addEventListener('keydown', closeModal);

  // Close lightbox by Escaoe
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModal);
    }
  }
}
