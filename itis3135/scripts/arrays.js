let persons = [];
let salaries = [];

function addSalary() {
    let personNameInput = document.getElementById("personName");
    let personSalaryInput = document.getElementById("personSalary");
    
    let personName = personNameInput.value.trim();
    let personSalary = parseFloat(personSalaryInput.value.trim());
    
    
    if (personName !== "" && !isNaN(personSalary) && personSalary >= 0) {
        
        persons.push(personName);
        salaries.push(personSalary);
       
        personNameInput.value = "";
        personSalaryInput.value = "";
        alert("Salary added successfully!");
        
        personNameInput.focus();
    } else {
        alert("Please enter a valid name and a numeric salary.");
    }
}

function modifySalary() {
    let selectEmployee = document.getElementById("selectEmployee");
    
    selectEmployee.innerHTML = "";
    
    
    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.text = persons[i];
        selectEmployee.add(option);
    }
    
    let selectedIndex = selectEmployee.selectedIndex;
    let newSalary = parseFloat(document.getElementById("newSalary").value.trim());
    
    if (selectedIndex !== -1 && !isNaN(newSalary)) {
       
        salaries[selectedIndex] = newSalary;
        alert("Salary modified successfully!");
    } else {
        alert("Please select an employee and enter a valid new salary.");
    }
}

function displayResults() {
    
    let totalSalary = 0;
    let highestSalary = 0;
    for (let i = 0; i < salaries.length; i++) {
        totalSalary += salaries[i];
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }
    let averageSalary = totalSalary / salaries.length;
      
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Salary: $" + averageSalary.toFixed(2) + "</p>";
    resultsDiv.innerHTML += "<p>Highest Salary: $" + highestSalary.toFixed(2) + "</p>";
}

function displaySalary() {
    
    let table = document.getElementById("results_table");

    
    table.innerHTML = "";

    let headerRow = table.insertRow();
    let nameHeader = headerRow.insertCell(0);
    let salaryHeader = headerRow.insertCell(1);
    nameHeader.textContent = "Name";
    salaryHeader.textContent = "Salary";
 
    for (let i = 0; i < persons.length; i++) {
        let newRow = table.insertRow();
        let nameCell = newRow.insertCell(0);
        let salaryCell = newRow.insertCell(1);
        nameCell.textContent = persons[i];
        salaryCell.textContent = "$" + salaries[i].toFixed(2);
    }
}

function focusNameField() {
    let personNameInput = document.getElementById("personName");
    personNameInput.focus();
}

document.getElementById("addSalaryBtn").addEventListener("click", addSalary);
document.getElementById("addSalaryBtn").addEventListener("click", focusNameField); // Move cursor to name field after clicking Add button
document.getElementById("modifySalaryBtn").addEventListener("click", modifySalary);
document.getElementById("displayResultsBtn").addEventListener("click", displayResults);
document.getElementById("displaySalaryBtn").addEventListener("click", displaySalary);