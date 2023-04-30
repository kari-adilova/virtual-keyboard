function backFocus() {
  document.addEventListener('click', () => {
    const textarea = document.querySelector('.input-text');
    textarea.focus();
  });
}

function glowKeys() {
  document.addEventListener('keydown', (key) => {
    const characters = document.querySelectorAll('.key');
    characters.forEach((elem) => {
      if (key.key === elem.innerText) {
        elem.classList.add('glow');
        setTimeout(() => {
          elem.classList.remove('glow');
        }, 200);
      }
    });
  });
}

function clickKeys() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const textarea = document.querySelector('.input-text');
      if (key.innerText === 'Backspace') {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      } else if (key.innerText === 'Tab') {
        textarea.value += '    ';
      } else if (key.innerText === 'Del') {

      } else if (key.innerText === 'CapsLock') {

      } else if (key.innerText === 'Enter') {
        textarea.value += '\n';
      } else if (key.innerText === 'Shift') {

      } else if (key.innerText === '\u2191') {
        textarea.value += '\u2191';
      } else if (key.innerText === 'en') {

      } else if (key.innerText === 'Ctrl') {

      } else if (key.innerText === 'Win') {

      } else if (key.innerText === 'Alt') {

      } else if (key.innerText === '') {
        textarea.value += ' ';
      } else if (key.innerText === '\u2190') {
        textarea.value += '\u2190';
      } else if (key.innerText === '\u2193') {
        textarea.value += '\u2193';
      } else if (key.innerText === '\u2192') {
        textarea.value += '\u2192';
      } else if (key.innerText === 'Hide keyboard') {
        key.innerText = 'Show keyboard'; // eslint-disable-line no-param-reassign
        const keyboard = document.querySelector('.keyboard');
        keyboard.style.display = 'none';
      } else if (key.innerText === 'Show keyboard') {
        key.innerText = 'Hide keyboard'; // eslint-disable-line no-param-reassign
        const keyboard = document.querySelector('.keyboard');
        keyboard.style.display = 'flex';
      } else {
        textarea.value += key.innerText;
      }
    });
  });
}

export { backFocus, clickKeys, glowKeys };
