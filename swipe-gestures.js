const swipeThreshold = window.screen.width * 0.25;
let clientX;
let ctrlPressed = false;

window.addEventListener('keydown', e => {
  if (e.key === 'Control') {
    ctrlPressed = true;
  }
});

window.addEventListener('keyup', e => {
  if (e.key === 'Control') {
    ctrlPressed = false;
  }
});

window.addEventListener('mousedown', e => {
  if (ctrlPressed) {
    swipeStart(e);
  }
});
window.addEventListener('mouseup', e => {
  if (ctrlPressed) {
    swipeEnd(e);
  }
});


function swipeStart(e) {
  e.preventDefault();
  clientX = e.clientX;
}

function swipeEnd(e) {
  if (clientX) {
    if (e.clientX - clientX > swipeThreshold) {
      swipeRight();
    } else if (clientX - e.clientX > swipeThreshold) {
      swipeLeft();
    }
  }
}

function swipeRight() {
  window.history.back();
}

function swipeLeft() {
  window.history.forward();
}
