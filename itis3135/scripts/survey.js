function loadImage(){
    var image = document.getElementById('introImage').files[0];

    const imageUrl = URL.createObjectURL(image);

    var text = "<img src=\"" + imageUrl + "\" >";

    document.getElementById('loadImage').innerHTML = text;
}

document.addEventListener('DOMContentLoaded', function () {
    // Add any initialization code here
});

function submitForm(event) {
    event.preventDefault();

    const formResults = document.getElementById('formResults');
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('introImage');
    const imageUrl = URL.createObjectURL(image.files[0]);
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;
    const agreeCheckbox = document.getElementById('agree');

    const currentCoursesList = document.getElementById('currentCoursesList');
    const courseEntries = document.getElementsByClassName('courseEntry');
    const courses = [];

    // Gather course information
    for (let i = 0; i < courseEntries.length; i += 2) {
        const title = courseEntries[i].value;
        const description = courseEntries[i + 1].value;
        // Check if at least one course title or description is filled
        if (title.trim() !== '' || description.trim() !== '') {
            courses.push({ title, description });
        }
    }

    // Construct the result HTML
    const resultHTML = `
        <h2>${name} || ${mascot} || Introduction</h2>
        <img src="${URL.createObjectURL(image)}" alt="${imageCaption}">
        <p>Personal Background: ${personalBackground}</p>
        <p>Professional Background: ${professionalBackground}</p>
        <p>Academic Background: ${academicBackground}</p>
        <p>Background in Web Development: ${webDevelopmentBackground}</p>
        <p>Primary Computer Platform: ${primaryComputerPlatform}</p>
        <p>Courses Currently Taking:</p>
        <ul>${courses.map(course => `<li>${course.title}: ${course.description}</li>`).join('')}</ul>
        <p>Funny thing? ${funnyThing}</p>
        <p>Anything else? ${anythingElse}</p>
        <button onclick="showForm()">Fill Out Form Again</button>
    `;

    // Display the result
    formResults.innerHTML = resultHTML;

    // Hide the form and show the result
    document.getElementById('surveyForm').style.display = 'none';
    formResults.style.display = 'block';
    document.getElementById('surveyForm').submit();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
    document.getElementById('formResults').innerHTML = '';
    document.getElementById('currentCoursesList').innerHTML = '';
}

function addCourse() {
    const courseTitle = document.getElementById('courseTitle').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const currentCoursesList = document.getElementById('currentCoursesList');

    // Add the course to the list if either title or description is filled
    if (courseTitle.trim() !== '' || courseDescription.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = `${courseTitle}: ${courseDescription}`;
        currentCoursesList.appendChild(listItem);

        // Clear the course input fields
        document.getElementById('courseTitle').value = '';
        document.getElementById('courseDescription').value = '';
    }
}

function showForm() {
    resetForm();
    document.getElementById('surveyForm').style.display = 'block';
    document.getElementById('formResults').style.display = 'none';
}