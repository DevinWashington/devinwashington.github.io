function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-input';

    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'courses[]';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        coursesDiv.removeChild(courseDiv);
    };

    courseDiv.appendChild(newCourseInput);
    courseDiv.appendChild(deleteButton);
    coursesDiv.appendChild(courseDiv);
}

function submitForm() {
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);
    const name = formData.get('name');
    const mascot = formData.get('mascot');
    const imageCaption = formData.get('image-caption');
    const imageFile = formData.get('image');
    const personalBackground = formData.get('pers-background');
    const professionalBackground = formData.get('prof-background');
    const academicBackground = formData.get('acad-background');
    const webBackground = formData.get('web-background');
    const computerBackground = formData.get('computer');
    const funnyBackground = formData.get('funny-thing');
    const otherBackground = formData.get('anything');

    let missingFields = [];
            if (!name) missingFields.push('Name');
            if (!mascot) missingFields.push('Mascot');
            if (!imageCaption) missingFields.push('Image Caption');
            if (!personalBackground) missingFields.push('Personal Background');
            if (!professionalBackground) missingFields.push('Professional Background');
            if (!academicBackground) missingFields.push('Academic Background');
            if (!webBackground) missingFields.push('Web Background');
            if (!computerBackground) missingFields.push('Computer Background');
            if (!funnyBackground) missingFields.push('Funny Thing!');
            if (!otherBackground) missingFields.push('Anything Else');
            if (!imageFile || imageFile.size === 0) missingFields.push('Image');
    if (missingFields.length > 0) {
        alertMessage.textContent = `Please fill out the following fields: ${missingFields.join(', ')}.`;
        alertMessage.style.display = 'block';
        return;
    }
    alertMessage.style.display = 'none';

    const reader = new FileReader();

    reader.onload = function(event) {
        const imageSrc = event.target.result;
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = ''; // Clear previous content

        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.alt = 'Uploaded Image';
        dataContainer.appendChild(imageElement);

        const listElement = document.createElement('ul');
        listElement.style.paddingLeft = '200px';
        listElement.style.paddingRight = '200px';

        const items = [
            `<strong>Name:</strong> ${name}`,
            `<strong>Mascot:</strong> ${mascot}`,
            `<strong>Image Caption:</strong> ${imageCaption}`,
            `<strong>Personal Background:</strong> ${personalBackground}`,
            `<strong>Professional Background:</strong> ${professionalBackground}`,
            `<strong>Academic Background:</strong> ${academicBackground}`,
            `<strong>Web Background:</strong> ${webBackground}`,
            `<strong>Computer Background:</strong> ${computerBackground}`,
            `<strong>Funny Thing!:</strong> ${funnyBackground}`,
            `<strong>Anything Else:</strong> ${otherBackground}`
        ];
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = item;
            listElement.appendChild(listItem);
        });
        const courses = formData.getAll('courses[]');
        if (courses.length > 0) {
        const coursesSection = document.createElement('li');
                coursesSection.innerHTML = '<strong>Courses:</strong>';
                const coursesList = document.createElement('ul');

                courses.forEach(course => {
                    const courseItem = document.createElement('li');
                    courseItem.textContent = course;
                    coursesList.appendChild(courseItem);
                });
                coursesSection.appendChild(coursesList);
                listElement.appendChild(coursesSection);
            }

                dataContainer.appendChild(listElement);
            

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        resetButton.onclick = function() {
            form.reset();
            form.style.display = 'block';
            dataContainer.style.display = 'none';
        };
        dataContainer.appendChild(resetButton);

        form.style.display = 'none'; // Hide the form
        dataContainer.style.display = 'block'; // Show the data container
    };

    reader.onerror = function() {
        alert('Error reading the image file.');
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please upload an image.');
    }
}