import { AvatarGenerator } from 'random-avatar-generator';
import { headerLogoRef } from '../references/refs';
import moment from 'moment';

const everyDayLogo = moment().format('L');

headerLogoRef.addEventListener('click', randomLogo);

function createLogo(img) {
  headerLogoRef.innerHTML = '';

  headerLogoRef.insertAdjacentHTML(
    'beforeend',
    `<a href="#">
    <img src="${img}" alt="Який ти сьгодні" title="Хто ти сьгодні?" loading="lazy" width=50>
      </a>`,
  );
}

function randomLogo() {
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar('');

  createLogo(avatar);
}

function defaultLogo() {
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(everyDayLogo);

  createLogo(avatar);
}

defaultLogo();
