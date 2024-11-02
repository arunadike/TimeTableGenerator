document.getElementById('generate-btn').addEventListener('click', function() {
    const numPeriods = parseInt(document.getElementById('numPeriods').value, 10);
    const timeFormat = document.getElementById('timeFormat').value;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const subjects = Array.from({ length: days.length }, () => new Array(numPeriods + 2).fill('')); // +2 for breaks
    const times = Array.from({ length: days.length }, () => new Array(numPeriods + 2).fill(''));

    const subjectOptions = ['Math', 'Science', 'English', 'History', 'Geography', 'Art', 'Physical Education'];

    // Build form for subject selection and time inputs
    let formHTML = '';
    days.forEach((day, dayIndex) => {
        formHTML += `<h3>${day}</h3>`;
        for (let i = 0; i < numPeriods; i++) {
            formHTML += `<label for="subject-${dayIndex}-${i}">Period ${i + 1} Subject:</label>`;
            formHTML += `<select id="subject-${dayIndex}-${i}">`;
            subjectOptions.forEach(option => {
                formHTML += `<option value="${option}">${option}</option>`;
            });
            formHTML += `</select>`;
            
            formHTML += `<label for="time-${dayIndex}-${i}">Period ${i + 1} Time:</label>`;
            formHTML += `<input type="text" id="time-${dayIndex}-${i}" placeholder="${timeFormat}">`;
        }
        formHTML += `<label for="lunch-${dayIndex}">Lunch Break:</label>`;
        formHTML += `<input type="text" id="lunch-${dayIndex}" placeholder="Lunch Time">`;

        formHTML += `<label for="tea-${dayIndex}">Tea Break:</label>`;
        formHTML += `<input type="text" id="tea-${dayIndex}" placeholder="Tea Time">`;
    });

    // Show the inputs for subjects and times
    document.getElementById('timetable').innerHTML = formHTML;

    // Add a button to generate the timetable after filling out the form
    document.getElementById('timetable').innerHTML += `<button id="create-timetable">Create Timetable</button>`;

    document.getElementById('create-timetable').addEventListener('click', function() {
        let timetableHTML = '<h2>Weekly Timetable</h2>';
        timetableHTML += `<p>Time Format: ${timeFormat}</p>`;
        timetableHTML += '<table><tr><th>Day</th>';

        for (let i = 1; i <= numPeriods; i++) {
            timetableHTML += `<th>Period ${i}</th>`;
        }
        timetableHTML += '<th>Lunch Break</th><th>Tea Break</th></tr>';

        days.forEach((day, dayIndex) => {
            timetableHTML += `<tr><td>${day}</td>`;
            for (let i = 0; i < numPeriods; i++) {
                const subject = document.getElementById(`subject-${dayIndex}-${i}`).value;
                const time = document.getElementById(`time-${dayIndex}-${i}`).value;
                timetableHTML += `<td>${time}<br>${subject}</td>`;
            }
            const lunch = document.getElementById(`lunch-${dayIndex}`).value;
            const tea = document.getElementById(`tea-${dayIndex}`).value;
            timetableHTML += `<td>${lunch}</td><td>${tea}</td>`;
            timetableHTML += '</tr>';
        });

        timetableHTML += '</table>';
        document.getElementById('timetable').innerHTML = timetableHTML;
    });
});
