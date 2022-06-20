const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//timeline
let timeEle = $$(".timeline__ele");

// console.log(timeEle);

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


// timeEle[1].style.fontSize = '15px';
export { $, $$ };
