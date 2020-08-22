
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = +valueRef.textContent;


btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

function decrement () {
     counterValue -= 1;
    return valueRef.textContent = counterValue;
}
function increment () {
    counterValue += 1;
   return valueRef.textContent = counterValue;
}