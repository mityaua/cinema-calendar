// Обьект тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Переключатель тем в DOM
const input = document.querySelector('#theme-switch-toggle');

// Слушатель событий на инпуте + коолбек функция для смены темы
input.addEventListener('change', changeTheme);

// Вызов функций для темы по умолчанию + проверка на темную тему
setDefaultTheme();
darkThemeCheck();

// Функция для темы по умолчанию
function setDefaultTheme() {
  document.body.classList.add(Theme.LIGHT);

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    const parsedTheme = JSON.parse(savedTheme);
    document.body.classList.add(parsedTheme);
  }
}

// Функция для смены темы
function changeTheme(event) {
  if (event.target.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
}

// Функция для проверки на темную тему
function darkThemeCheck() {
  if (document.body.classList.contains(Theme.DARK)) {
    input.checked = true;
    document.body.classList.remove(Theme.LIGHT);
  }
}
