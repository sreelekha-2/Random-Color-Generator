console.log('Hello!');

// let colors = ['blue', 'red'];

let btn = document.getElementById('btn');

let bgContainer = document.getElementById('bg');

let colorCode = document.getElementById('colorCode');

function changeBgColor() {
  let randomNum = Math.ceil(Math.random() * 16777216);

  let randomColor = `#${randomNum.toString(16)}`;
  bgContainer.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
  btn.style.backgroundColor = randomColor;
}

btn.addEventListener('click', changeBgColor);
