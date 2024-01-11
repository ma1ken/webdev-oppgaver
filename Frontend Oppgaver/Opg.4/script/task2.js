// html
// input
console.log(showMultiplication);

const inputNumber1 = document.querySelector("#input-number1");
const inputNumber2 = document.querySelector("#input-number2");

// buttons
const multiBtn = document.querySelector("#multi-button");
const divideBtn = document.querySelector("#divide-button");
const addBtn = document.querySelector("#add-button");
const subtractBtn = document.querySelector("#subtract-button");

// outputfelt
const outputMultiply = document.querySelector("#output-multiply");
const outputDivide = document.querySelector("#output-divide");
const outputAdd = document.querySelector("#output-add");
const outputSubtract = document.querySelector("#output-subtract");


// funksjoner
function showMultiplication() {
    number1 = inputNumber1.value;
    number2 = inputNumber2.value;
    result = multiply ( number1, number2 );
    outputMultiply.innerHTML = result;
}

function multiply( number1, number2 ) {
    return number1 * number2;
}

// buttons
multiBtn.addEventListener("click", showMultiplication)

