import { AvatarGenerator } from 'random-avatar-generator';

import moment from 'moment';

import { animateCSS } from './animate';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const everyDayLogo = moment().format('L');

import { headerLogoRef } from '../references/refs';

headerLogoRef.addEventListener('click', randomLogo);

function createLogo(img) {
  headerLogoRef.innerHTML = '';

  headerLogoRef.insertAdjacentHTML(
    'beforeend',
    `<a href="#">
    <img src="${img}" alt="Твій аватар на сьогодні" title="Твій аватар на сьогодні" loading="lazy" width="50">
      </a>`,
  );

  animateCSS('.logo', 'flip');
}

function randomLogo() {
  NProgress.start();

  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar('');

  createLogo(avatar);

  NProgress.done();
}

function defaultLogo() {
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(everyDayLogo);

  createLogo(avatar);
}

defaultLogo();
