const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let min = 0;
let max = colors.length;
let intId = null;
let isActive = false;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



const start = document.querySelector(`[data-action="start"]`);
const stop = document.querySelector(`[data-action="stop"]`);
const body = document.querySelector('body');



start.addEventListener('click', () => {
    
    if (isActive) {
        return;
    }
    isActive = true;
    intId = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(intId);
    isActive = false;
});

