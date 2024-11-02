document.getElementById('timetable-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const subject = document.getElementById('subject').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    const tableBody = document.querySelector('#timetable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${subject}</td>
        <td>${day}</td>
        <td>${time}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear the form fields
    this.reset();
});
