import toastr from './notify';

export default function animateEmojis() {
  document.querySelectorAll('.emoji').forEach(element => {
    element.addEventListener('click', () => {
      document
        .querySelectorAll('.emoji.active')
        .forEach(active => active.classList.remove('active'));
      requestAnimationFrame(() => element.classList.add('active'));
      toastr.success('Ваше враження враховано');
    });
  });
}
