// html
const countryListBtn = document.querySelector("#country-list-btn");
const countryList = document.querySelector("#country-list");

const countries = [
    {country_name: "Norway", capital: "Oslo", flag: "norge.png" },
    {country_name: "Sweden", capital: "Stockholm", flag: "sverige.png" },
    {country_name: "Denmark", capital: "Copenhagen", flag: "Danmark.png" },
    {country_name: "Finland", capital: "Helsinki", flag: "Finland.png" },
    {country_name: "Iceland", capital: "Reykjavik", flag: "Island.png" }
];

const addCountries = () => {
    let htmlTxt = "";
    countries.forEach( country => {
        htmlTxt += `
            <article>
                <h3>${ country.country_name }</h3>
                <h4>Hovedstad: ${ country.capital }</h4>
                <img style="width: 150px;" src="/images/${ country.flag }" alt="Illustrasjon. Flaggbilde.">
            </article>`;
    });
    countryList.innerHTML = htmlTxt;
}
console.log(countryList);


countryListBtn.addEventListener("click", addCountries );
console.log(countryListBtn);