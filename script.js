"use strict";

window.addEventListener("DOMContentLoaded", start);

let N = 0;
const arr = [N];
function start() {
  console.log("start");

  N++;

  arr.unshift(N);

  console.log(arr.slice(0, 9));
  setTimeout(start, 1000);
}
