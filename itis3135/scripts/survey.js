function addCourse() {
    const currentCoursesList = document.getElementById('currentCoursesList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="text" name="courseTitle[]" class="courseTitle" placeholder="Course Title" required>
        <button type="button" onclick="removeCourse(this)">Remove</button>
    `;
    currentCoursesList.appendChild(listItem);
}

function removeCourse(button) {
    const currentCoursesList = document.getElementById('currentCoursesList');
    const listItem = button.parentNode;
    currentCoursesList.removeChild(listItem);
}

function submitForm(event) {
    event.preventDefault();

    const formResults = document.getElementById('formResults');
    const form = document.getElementById('myForm');

    const imageUrl = URL.createObjectURL(form.elements.image.files[0]);

    const formData = new FormData(form);
    const courses = formData.getAll('courseTitle[]');

    const resultHTML = `
        <h2><b></b> ${formData.get('name')} || <b></b> ${formData.get('mascot')}</h2>
        <img src="${imageUrl}" alt="${formData.get('imageCaption')}">
        <ul>
            <li><b>Personal Background:</b> ${formData.get('personalBackground')}</li>
            <li><b>Professional Background:</b> ${formData.get('professionalBackground')}</li>
            <li><b>Academic Background:</b> ${formData.get('academicBackground')}</li>
            <li><b>Background in Web Development:</b> ${formData.get('webDevelopmentBackground')}</li>
            <li><b>Primary Computer Platform:</b> ${formData.get('primaryComputerPlatform')}</li>
            <li><b>Courses Currently Taking:</b></li>
            <ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>
            <li><b>Funny thing?</b> ${formData.get('funnyThing')}</li>
            <li><b>Anything else?</b> ${formData.get('anythingElse')}</li>
        </ul>
    `;

    formResults.innerHTML = resultHTML;
    form.style.display = 'none';
    formResults.style.display = 'block';
}
