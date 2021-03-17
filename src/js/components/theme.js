import store from 'store';
import { inputRef } from '../references/refs';

// Обьект тем
const Theme = {
  LIGHT: 'day-theme',
  DARK: 'night-theme',
};

// Слушатель события на инпуте
inputRef.addEventListener('change', changeInput);

// Проверка переключателя
function changeInput(event) {
  event.currentTarget.checked ? checkedInput() : notCheckedInput();
}

// Установка темной темы
function checkedInput() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  store.set('site-theme', Theme.DARK);
  inputRef.checked = true;
}

// Установка светлой темы
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  store.set('site-theme', Theme.LIGHT);
  inputRef.checked = false;
}

// Тема по умолчанию
function currentTheme() {
  const savedTheme = store.get('site-theme');
  if (savedTheme === Theme.LIGHT || !savedTheme) {
    notCheckedInput();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedInput();
    return;
  }
}

currentTheme();