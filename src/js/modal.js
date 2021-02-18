// Плагин для модалки
import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const openmodalBtnRef = document.querySelector('.card-thumb[data-modal-open]');
const modalContainer = document.querySelector('#modal');

const instance = basicLightbox.create(modalContainer, {
  onShow(instance) {
    const closemodalBtnRef = getCloseModalBtnRef(instance);
    closemodalBtnRef.addEventListener('click', instance.close);

    window.addEventListener('keydown', closeModalByEscape);
  },
  onClose(instance) {
    const closemodalBtnRef = getCloseModalBtnRef(instance);
    closemodalBtnRef.removeEventListener('click', instance.close);

    window.removeEventListener('keydown', closeModalByEscape);
  },
});

openmodalBtnRef.addEventListener('click', instance.show);

function getCloseModalBtnRef(parent) {
  return parent.element().querySelector('button[data-modal-close]');
}

function closeModalByEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}