// change require to es6 import style
import './style.scss';

let b = 0;

function myTimer() {
  b += 1;
  document.getElementById('main').innerHTML = (`You've been on this page for ${b} seconds.. This will be a simple counter`);
}

setInterval(() => { myTimer(); }, 1000);
