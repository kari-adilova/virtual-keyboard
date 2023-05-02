import {
  ENGLISH_LOWERCASE, ENGLISH_UPPERCASE, RUSSIAN_LOWERCASE,
  RUSSIAN_UPPERCASE, ENGLISH_SHIFT, RUSSIAN_SHIFT,
} from './keys.js';

let stateCaps = false; // CapsLock state
let ctrlAltState = false;
const { sessionStorage } = window;

// back focus to textarea
function backFocus() {
  document.addEventListener('click', () => {
    const textarea = document.querySelector('.input-text');
    textarea.focus();
  });
}

// show chosen keyboard
function showKeys(lang) {
  let currentLang = [];
  const keys = document.querySelectorAll('.key');

  if (stateCaps === true) {
    if (lang === 'ru') {
      currentLang = RUSSIAN_UPPERCASE;
    } else if (lang === 'en') {
      currentLang = ENGLISH_UPPERCASE;
    }
  } else if (lang === 'ru') {
    currentLang = RUSSIAN_LOWERCASE;
  } else if (lang === 'en') {
    currentLang = ENGLISH_LOWERCASE;
  }

  const array = [].concat(
    currentLang[0],
    currentLang[1],
    currentLang[2],
    currentLang[3],
    currentLang[4],
  );

  for (let i = 0; i < keys.length - 1; i += 1) {
    keys[i].innerText = array[i];
  }
}

// change lang
function changeLang() {
  const lang = document.querySelector('.lang').innerText;

  if (lang === 'en') {
    showKeys('ru');
    sessionStorage.setItem('lang', 'ru');
  } else if (lang === 'ru') {
    showKeys('en');
    sessionStorage.setItem('lang', 'en');
  }
}

// caps keyboard
function toggleUpperKeys() {
  const keys = document.querySelectorAll('.key');
  const lang = document.querySelector('.lang').innerText;
  let currentLang = [];
  if (stateCaps === false) {
    if (lang === 'ru') {
      currentLang = RUSSIAN_UPPERCASE;
    } else if (lang === 'en') {
      currentLang = ENGLISH_UPPERCASE;
    }
    stateCaps = true;
  } else {
    if (lang === 'ru') {
      currentLang = RUSSIAN_LOWERCASE;
    } else if (lang === 'en') {
      currentLang = ENGLISH_LOWERCASE;
    }
    stateCaps = false;
  }

  const array = [].concat(
    currentLang[0],
    currentLang[1],
    currentLang[2],
    currentLang[3],
    currentLang[4],
  );

  for (let i = 0; i < keys.length - 1; i += 1) {
    keys[i].innerText = array[i];
  }
}

function toggleShift() {
  const keys = document.querySelectorAll('.key');
  const lang = document.querySelector('.lang').innerText;
  let currentLang = [];

  if (lang === 'ru') {
    currentLang = RUSSIAN_SHIFT;
  } else if (lang === 'en') {
    currentLang = ENGLISH_SHIFT;
  }

  for (let i = 0; i < currentLang.length; i += 1) {
    keys[i].innerText = currentLang[i];
  }
}

// keydown
document.addEventListener('keydown', (key) => {
  const characters = document.querySelectorAll('.key');
  const ctrl = document.querySelectorAll('.ctrl');
  const win = document.querySelector('.win');
  const del = document.querySelector('.del');
  const arrowUp = document.querySelector('.arrow-up');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowDown = document.querySelector('.arrow-down');
  const arrowRight = document.querySelector('.arrow-right');
  const space = document.querySelector('.space');

  characters.forEach((elem) => {
    if (key.key === elem.innerText) {
      elem.classList.add('glow');
    }
    if (key.key === 'CapsLock') {
      elem.classList.toggle('chosen');
    }
  });

  if (key.key === 'Control') {
    ctrl[0].classList.add('glow');
    ctrl[1].classList.add('glow');
  }
  if (key.key === 'CapsLock') {
    toggleUpperKeys();
  }
  if (key.key === 'Shift') {
    toggleUpperKeys();
    toggleShift();
  }
  if (key.key === 'Meta') {
    win.classList.add('glow');
  }
  if (key.key === 'Delete') {
    del.classList.add('glow');
  }
  if (key.key === 'ArrowUp') {
    arrowUp.classList.add('glow');
  }
  if (key.key === 'ArrowDown') {
    arrowDown.classList.add('glow');
  }
  if (key.key === 'ArrowLeft') {
    arrowLeft.classList.add('glow');
  }
  if (key.key === 'ArrowRight') {
    arrowRight.classList.add('glow');
  }
  if (key.code === 'Space') {
    space.classList.add('glow');
  }
  if ((key.key === 'Alt' || key.key === 'Control') && ctrlAltState === true) {
    changeLang();
  }
  if (key.key === 'Control' || key.key === 'Alt') {
    ctrlAltState = true;
  }
});

// keyup
document.addEventListener('keyup', (key) => {
  const characters = document.querySelectorAll('.key');
  const ctrl = document.querySelectorAll('.ctrl');
  const win = document.querySelector('.win');
  const del = document.querySelector('.del');
  const arrowUp = document.querySelector('.arrow-up');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowDown = document.querySelector('.arrow-down');
  const arrowRight = document.querySelector('.arrow-right');
  const space = document.querySelector('.space');

  characters.forEach((elem) => {
    if (key.key === elem.innerText) {
      elem.classList.remove('glow');
    }
    if (key.key === 'Shift') {
      toggleUpperKeys();
    }
  });

  if (key.key === 'Control') {
    ctrl[0].classList.remove('glow');
    ctrl[1].classList.remove('glow');
  }
  if (key.key === 'Meta') {
    win.classList.remove('glow');
  }
  if (key.key === 'Delete') {
    del.classList.remove('glow');
  }
  if (key.key === 'ArrowUp') {
    arrowUp.classList.remove('glow');
  }
  if (key.key === 'ArrowDown') {
    arrowDown.classList.remove('glow');
  }
  if (key.key === 'ArrowLeft') {
    arrowLeft.classList.remove('glow');
  }
  if (key.key === 'ArrowRight') {
    arrowRight.classList.remove('glow');
  }
  if (key.code === 'Space') {
    space.classList.remove('glow');
  }
  if (key.key === 'Control' || key.key === 'Alt') {
    ctrlAltState = false;
  }
});

// mousedown
function clickShift() {
  const shift = document.querySelector('.shift');
  shift.addEventListener('mousedown', () => {
    toggleUpperKeys();
    toggleShift();
  });
  shift.addEventListener('mouseup', () => {
    toggleUpperKeys();
  });
}

// clickable keys
function clickKeys() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const textarea = document.querySelector('.input-text');
      if (key.innerText === 'Backspace') {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      } else if (key.innerText === 'Tab') {
        textarea.value += '    ';
      } else if (key.innerText === 'CapsLock') {
        toggleUpperKeys();
        key.classList.toggle('chosen');
      } else if (key.innerText === 'Enter') {
        textarea.value += '\n';
      } else if (key.innerText === '\u2191') {
        textarea.value += '\u2191';
      } else if (key.innerText === 'en' || key.innerText === 'ru') {
        changeLang();
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
      } else if (key.innerText !== 'Shift' && key.innerText !== 'Alt' && key.innerText !== 'Ctrl' && key.innerText !== 'Win' && key.innerText !== 'Del') {
        textarea.value += key.innerText;
      }
    });
  });
}

export { backFocus, clickKeys, clickShift };
