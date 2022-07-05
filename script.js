console.log('Hello!');

let btn = document.getElementById('btn');

let bgContainer = document.getElementById('bg');

let colorCode = document.getElementById('colorCode');

function getRandomColor() {
  let randomNum = Math.ceil(Math.random() * 16777216); //from 00 to FF we have 256 combinations. So total 256^3 combinations
  console.log(randomNum);

  let randomColor = `#${randomNum.toString(16)}`;
  bgContainer.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
  btn.style.backgroundColor = randomColor;
}

btn.addEventListener('click', getRandomColor);
