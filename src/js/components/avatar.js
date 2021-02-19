import { AvatarGenerator } from 'random-avatar-generator';
import { headerLogoRef } from '../references/refs';

headerLogoRef.addEventListener('click', logoGenerator);

function logoGenerator() {
  headerLogoRef.innerHTML = '';
  const generator = new AvatarGenerator();

  const avatar = generator.generateRandomAvatar('');

  headerLogoRef.insertAdjacentHTML(
    'beforeend',
    `<a href="#">
    <img src="${avatar}" alt="Який ти сьгодні" title="Який ти сьгодні?" loading="lazy" width=50>
      </a>`,
  );
}

logoGenerator();
