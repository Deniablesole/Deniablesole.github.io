// Declare empty arrays for person and salaries
let persons = [];
let salaries = [];

// Function to add a new salary
function addSalary() {
    let personNameInput = document.getElementById("personName");
    let personSalaryInput = document.getElementById("personSalary");
    
    let personName = personNameInput.value.trim();
    let personSalary = parseFloat(personSalaryInput.value.trim());
    
    // Check if inputs are valid
    if (personName !== "" && !isNaN(personSalary) && personSalary >= 0) {
        // Add person and salary to respective arrays
        persons.push(personName);
        salaries.push(personSalary);
        // Clear input fields
        personNameInput.value = "";
        personSalaryInput.value = "";
        alert("Salary added successfully!");
        // Move cursor to the name field
        personNameInput.focus();
    } else {
        alert("Please enter a valid name and a numeric salary.");
    }
}

// Function to modify an existing salary
function modifySalary() {
    let selectEmployee = document.getElementById("selectEmployee");
    let selectedIndex = selectEmployee.selectedIndex;
    let newSalary = parseFloat(document.getElementById("newSalary").value.trim());
    
    if (selectedIndex !== -1 && !isNaN(newSalary)) {
        // Modify the salary at the selected index
        salaries[selectedIndex] = newSalary;
        alert("Salary modified successfully!");
    } else {
        alert("Please select an employee and enter a valid new salary.");
    }
}

// Function to display the results
function displayResults() {
    // Calculate average salary
    let totalSalary = 0;
    let highestSalary = 0;
    for (let i = 0; i < salaries.length; i++) {
        totalSalary += salaries[i];
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }
    let averageSalary = totalSalary / salaries.length;
    
    // Display results in the "results" div
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Salary: $" + averageSalary.toFixed(2) + "</p>";
    resultsDiv.innerHTML += "<p>Highest Salary: $" + highestSalary.toFixed(2) + "</p>";
}

// Function to display a specific salary
function displaySalary() {
    // Get the table element
    let table = document.getElementById("results_table");

    // Clear existing rows from the table
    table.innerHTML = "";

    // Create header row
    let headerRow = table.insertRow();
    let nameHeader = headerRow.insertCell(0);
    let salaryHeader = headerRow.insertCell(1);
    nameHeader.textContent = "Name";
    salaryHeader.textContent = "Salary";

    // Populate table with data
    for (let i = 0; i < persons.length; i++) {
        let newRow = table.insertRow();
        let nameCell = newRow.insertCell(0);
        let salaryCell = newRow.insertCell(1);
        nameCell.textContent = persons[i];
        salaryCell.textContent = "$" + salaries[i].toFixed(2);
    }
}

// Function to move cursor to the name field
function focusNameField() {
    let personNameInput = document.getElementById("personName");
    personNameInput.focus();
}

// Attach functions to buttons
document.getElementById("addSalaryBtn").addEventListener("click", addSalary);
document.getElementById("addSalaryBtn").addEventListener("click", focusNameField); // Move cursor to name field after clicking Add button
document.getElementById("modifySalaryBtn").addEventListener("click", modifySalary);
document.getElementById("displayResultsBtn").addEventListener("click", displayResults);
document.getElementById("displaySalaryBtn").addEventListener("click", displaySalary);