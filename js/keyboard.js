import {
  ENGLISH_LOWERCASE, ENGLISH_UPPERCASE, RUSSIAN_LOWERCASE, RUSSIAN_UPPERCASE,
} from './keys.js';

const body = document.querySelector('body');
const HEADER_TITLE = 'RSS Virtual Keyboard';

function createKeyboard() {
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

  for (let i = 0; i < ENGLISH_LOWERCASE.length; i += 1) {
    const keyboardLine = document.createElement('div');
    keyboardLine.className = 'keyboard__line';

    for (let j = 0; j < ENGLISH_LOWERCASE[i].length; j += 1) {
      const button = document.createElement('button');
      button.className = 'key';

      if (ENGLISH_LOWERCASE[i][j] === 'Backspace'
      || ENGLISH_LOWERCASE[i][j] === 'Tab'
      || ENGLISH_LOWERCASE[i][j] === 'Del'
      || ENGLISH_LOWERCASE[i][j] === 'CapsLock'
      || ENGLISH_LOWERCASE[i][j] === 'Enter'
      || ENGLISH_LOWERCASE[i][j] === 'Shift'
      || ENGLISH_LOWERCASE[i][j] === '\u2191'
      || ENGLISH_LOWERCASE[i][j] === 'en'
      || ENGLISH_LOWERCASE[i][j] === 'Ctrl'
      || ENGLISH_LOWERCASE[i][j] === 'Win'
      || ENGLISH_LOWERCASE[i][j] === 'Alt'
      || ENGLISH_LOWERCASE[i][j] === ''
      || ENGLISH_LOWERCASE[i][j] === '\u2190'
      || ENGLISH_LOWERCASE[i][j] === '\u2193'
      || ENGLISH_LOWERCASE[i][j] === '\u2192') {
        button.classList.add('functional');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Backspace') {
        button.classList.add('backspace');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Tab') {
        button.classList.add('tab');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Del') {
        button.classList.add('del');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'CapsLock') {
        button.classList.add('capslock');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Enter') {
        button.classList.add('enter');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Shift') {
        button.classList.add('shift');
      }

      if (ENGLISH_LOWERCASE[i][j] === '\u2191') {
        button.classList.add('arrow-up');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'en') {
        button.classList.add('lang');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Ctrl') {
        button.classList.add('ctrl');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Win') {
        button.classList.add('win');
      }

      if (ENGLISH_LOWERCASE[i][j] === 'Alt') {
        button.classList.add('alt');
      }

      if (ENGLISH_LOWERCASE[i][j] === '') {
        button.classList.add('space');
      }

      if (ENGLISH_LOWERCASE[i][j] === '\u2190') {
        button.classList.add('arrow-left');
      }

      if (ENGLISH_LOWERCASE[i][j] === '\u2193') {
        button.classList.add('arrow-down');
      }

      if (ENGLISH_LOWERCASE[i][j] === '\u2192') {
        button.classList.add('arrow-right');
      }

      button.innerText = ENGLISH_LOWERCASE[i][j];
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
  footerText2.innerText = 'Use shift + alt to switch language';

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
