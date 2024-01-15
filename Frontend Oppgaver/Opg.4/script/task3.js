// html
const showCountryBtn = document.querySelector("#show-countries-button");
const outputList = document.querySelector("#output-list");



// functions
const countryArray = [
    `Norge`, `Sverige`, `Danmark`, `Island`, `Finland`
];


const showCountryList = () => {
    let htmlTxt = "";
    countryArray.forEach (country => {
        htmlTxt += `<li>${ country } </li>`;
    } );
    outputList.innerHTML = htmlTxt;
    
}


console.log(outputList);

// buttons
showCountryBtn.addEventListener("click", showCountryList );