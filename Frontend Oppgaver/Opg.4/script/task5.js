// html
const departmentSelect = document.querySelector("#department-select");
const searchBtn = document.querySelector("#search-btn");
const employeesSection = document.querySelector("#employees-section");

// array og variabler
const departments = [
    {firstName: "Ragnar", surName: "Brokken", department: "hr"},
    {firstName: "Jorun", surName: "Kolera", department: "hr"},
    {firstName: "Trine", surName: "Ellingsen", department: "support"},
    {firstName: "Vigis", surName: "Fruus", department: "support"},
    {firstName: "Torstein", surName: "Gjertnsen", department: "marketing"},
    {firstname: "Roy Kåre", surName: "Johansen", department: "marketing"}
];

let selectedDepartment;
let filteredEmployees;

// funksjoner
const chosenDepartmens = () => {
    // Get the selected department from the dropdownt
    selectedDepartment = departmentSelect.value;

    // Filter employees based on the selected department
    filteredEmployees = departments.filter(employee => employee.department === selectedDepartment);

    let htmlTxt = "";

    filteredEmployees.forEach ( employee => {
        htmlTxt += `
            <article>  
                <h3>${employee.firstName} ${employee.surName } </h3>
                <h4>${employee.department}</h4>
            </article>
            `;
    });

    employeesSection.innerHTML = htmlTxt;
}
console.log(selectedDepartment);
// events
searchBtn.addEventListener("click", chosenDepartmens );


