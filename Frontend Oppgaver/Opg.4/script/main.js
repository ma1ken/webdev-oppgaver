const randomNumberRegularBtn = document.querySelector("#random-number-regular-btn");
const randomNumberArrowBtn = document.querySelector("#random-number-arrow-btn");
const outputRegular = document.querySelector("#output-regular");
const outputArrow = document.querySelector("#output-arrow");

function getRandomNumberRegular() {
    return outputRegular.innerHTML = `Fra vanlig funksjon: ${Math.random()}`;
    console.log(getRandomNumberRegular());
}

const getRandomNumberArrow = () => {
    outputArrow.innerHTML = `Fra arrow funksjon: ${Math.random()}`;
}

randomNumberRegularBtn.addEventListener("click", getRandomNumberRegular);
randomNumberArrowBtn.addEventListener("click", getRandomNumberArrow);