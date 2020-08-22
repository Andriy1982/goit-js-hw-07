
const inputRef =document.querySelector('#controls>input');
const btnCreateRef =document.querySelector('button[data-action="render"]');
const btnClearRef =document.querySelector('button[data-action="destroy"]');
const boxesRef =document.querySelector('#boxes');
let sizeBox = 30;

  function randomNum() {
    return Math.floor(Math.random() * 256);
  }
  
  function randomRGB() {
    var red = randomNum();
    var green = randomNum();
    var blue = randomNum();
    return [red,green,blue];
  }

function createOneBox() {
    const newBoxRef = document.createElement('div');
    newBoxRef.style.height = sizeBox + 'px';
    newBoxRef.style.width = sizeBox + 'px';
    newBoxRef.style.backgroundColor = "rgb(" + randomRGB()[0] + ", " + randomRGB()[1] + ", " + randomRGB()[2] + ")";
    sizeBox  += 10;  
    return newBoxRef;
}

function createBoxes(amount) {
if (amount !== 0) {
   boxesRef.appendChild(createOneBox())
    amount -=1;
    return createBoxes(amount)
}
}

btnCreateRef.addEventListener('click', () => {
    if (inputRef.value > 0) {
        createBoxes(inputRef.value);
    }
});

btnClearRef.addEventListener('click', () => {
    boxesRef.innerHTML = '';
})