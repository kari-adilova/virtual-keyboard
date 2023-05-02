import {
  ENGLISH_LOWERCASE, RUSSIAN_LOWERCASE,
} from './keys.js';

const body = document.querySelector('body');
const HEADER_TITLE = 'RSS Virtual Keyboard';
const { sessionStorage } = window;

function createKeyboard() {
  const lang = sessionStorage.getItem('lang');
  let currentLang = [];
  if (lang === 'ru') {
    currentLang = RUSSIAN_LOWERCASE;
  } else {
    currentLang = ENGLISH_LOWERCASE;
  }

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  // header
  const header = document.createElement('header');

  const headerTitle = document.createElement('h1');
  headerTitle.className = 'header__title';
  headerTitle.innerText = HEADER_TITLE;

  header.appendChild(headerTitle);

  // main
  const main = document.createElement('main');

  const textarea = document.createElement('textarea');
  textarea.className = 'input-text';
  textarea.setAttribute('rows', '18');
  textarea.autofocus = true;

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  for (let i = 0; i < currentLang.length; i += 1) {
    const keyboardLine = document.createElement('div');
    keyboardLine.className = 'keyboard__line';

    for (let j = 0; j < currentLang[i].length; j += 1) {
      const button = document.createElement('button');
      button.className = 'key';

      if (currentLang[i][j] === 'Backspace'
      || currentLang[i][j] === 'Tab'
      || currentLang[i][j] === 'Del'
      || currentLang[i][j] === 'CapsLock'
      || currentLang[i][j] === 'Enter'
      || currentLang[i][j] === 'Shift'
      || currentLang[i][j] === '\u2191'
      || currentLang[i][j] === 'en'
      || currentLang[i][j] === 'Ctrl'
      || currentLang[i][j] === 'Win'
      || currentLang[i][j] === 'Alt'
      || currentLang[i][j] === ''
      || currentLang[i][j] === '\u2190'
      || currentLang[i][j] === '\u2193'
      || currentLang[i][j] === '\u2192') {
        button.classList.add('functional');
      }

      if (currentLang[i][j] === 'Backspace') {
        button.classList.add('backspace');
      }

      if (currentLang[i][j] === 'Tab') {
        button.classList.add('tab');
      }

      if (currentLang[i][j] === 'Del') {
        button.classList.add('del');
      }

      if (currentLang[i][j] === 'CapsLock') {
        button.classList.add('capslock');
      }

      if (currentLang[i][j] === 'Enter') {
        button.classList.add('enter');
      }

      if (currentLang[i][j] === 'Shift') {
        button.classList.add('shift');
      }

      if (currentLang[i][j] === '\u2191') {
        button.classList.add('arrow-up');
      }

      if (currentLang[i][j] === 'en' || currentLang[i][j] === 'ru') {
        button.classList.add('lang');
      }

      if (currentLang[i][j] === 'Ctrl') {
        button.classList.add('ctrl');
      }

      if (currentLang[i][j] === 'Win') {
        button.classList.add('win');
      }

      if (currentLang[i][j] === 'Alt') {
        button.classList.add('alt');
      }

      if (currentLang[i][j] === '') {
        button.classList.add('space');
      }

      if (currentLang[i][j] === '\u2190') {
        button.classList.add('arrow-left');
      }

      if (currentLang[i][j] === '\u2193') {
        button.classList.add('arrow-down');
      }

      if (currentLang[i][j] === '\u2192') {
        button.classList.add('arrow-right');
      }

      button.innerText = currentLang[i][j];
      keyboardLine.appendChild(button);
    }

    keyboard.appendChild(keyboardLine);
  }

  const hideButton = document.createElement('button');
  hideButton.classList.add('key', 'hide');
  hideButton.innerText = 'Hide keyboard';

  main.appendChild(textarea);
  main.appendChild(keyboard);
  main.appendChild(hideButton);

  // footer
  const footer = document.createElement('footer');

  const footerText1 = document.createElement('p');
  footerText1.className = 'footer__info';
  footerText1.innerText = 'Keyboard was done in Windows OS';
  const footerText2 = document.createElement('p');
  footerText2.className = 'footer__info';
  footerText2.innerText = 'Use ctrl + alt to switch language';

  footer.appendChild(footerText1);
  footer.appendChild(footerText2);

  // append wrapper
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);

  // append body
  body.appendChild(wrapper);
}

export default { createKeyboard };
