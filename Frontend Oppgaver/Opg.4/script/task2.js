// html
// input

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
const setNumbers = () => {
    number1 = inputNumber1.value;
    number2 = inputNumber2.value;	
}

// multiply
const showMultiplication = () => {
    setNumbers()
    result = multiply ( number1, number2 );
    outputMultiply.innerHTML = result;
}

const multiply = ( number1, number2 ) => {
    return number1 * number2;
}

// divide
const showDividation = () => {
    setNumbers();
    result = divide ( number1, number2);
    outputDivide.innerHTML = result;
}

const divide = ( number1, number2 ) => {
    return number1 / number2;
}
// add
const showAdd = () => {
    number1 = Number (inputNumber1.value);
    number2 = Number (inputNumber2.value);
    result = add (number1, number2);
    outputAdd.innerHTML = result;
}

const add = (number1, number2) => {
    return number1 + number2;
}
// subtract
const showSubtract = () => {
    setNumbers();
    result = subtract (number1, number2);
    outputSubtract.innerHTML = result;
}

const subtract = (number1, number2) => {
    return number1 - number2;
}

// buttons
multiBtn.addEventListener("click", showMultiplication);
divideBtn.addEventListener("click", showDividation);
addBtn.addEventListener("click", showAdd);
subtractBtn.addEventListener("click", showSubtract);

console.log(showMultiplication);
console.log(showAdd);
