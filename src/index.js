// change require to es6 import style

import $ from 'jquery';
import './style.scss';

let num = setInterval(function(){ myTimer() }, 1000);
let b=0;

function myTimer() {
  var x = document.body;
  b++;
  document.getElementById("main").innerHTML=("You've been on this page for "+b+" seconds.. This will be a simple counter");
}
