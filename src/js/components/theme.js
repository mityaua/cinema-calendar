import { inputRef } from '../references/refs';

// Обьект тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
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
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
}

// Установка светлой темы
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
}

// Тема по умолчанию
function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    notCheckedInput();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedInput();
    return;
  }
}

currentTheme();