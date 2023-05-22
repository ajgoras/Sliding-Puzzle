function revealtime() {
  var elements = document.getElementsByClassName("revealtime");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("delayed");
  }
}

function revealtime2() {
  var elements = document.getElementsByClassName("revealtime2");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("delayed");
  }
}
function revealtime3() {
  var elements = document.getElementsByClassName("revealtime3");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("delayed");
  }
}

setTimeout(() => {
  revealtime();
}, 300);
setTimeout(() => {
  revealtime2();
}, 450);
setTimeout(() => {
  revealtime3();
}, 1250);

setTimeout(() => {
  scroll(0, 0);
}, 20);
