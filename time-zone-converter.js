document.addEventListener('DOMContentLoaded', function() {
    const fromTimezone = document.getElementById('from-timezone');
    const toTimezone = document.getElementById('to-timezone');
    const convertBtn = document.getElementById('convert-btn');
    const resultDiv = document.getElementById('result');

    const timezones = Intl.supportedValuesOf('timeZone');
    timezones.forEach(tz => {
        const option1 = document.createElement('option');
        option1.value = tz;
        option1.textContent = tz;
        fromTimezone.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = tz;
        option2.textContent = tz;
        toTimezone.appendChild(option2);
    });

    fromTimezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
    toTimezone.value = 'UTC';

    convertBtn.addEventListener('click', function() {
        const date = document.getElementById('date-input').value;
        const time = document.getElementById('time-input').value;
        const fromTz = fromTimezone.value;
        const toTz = toTimezone.value;

        if (date && time) {
            const dateTimeString = `${date}T${time}`;
            const fromDate = new Date(dateTimeString);

            const options = {
                timeZone: toTz,
                year: 'numeric', month: 'long', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const convertedTime = formatter.format(fromDate);
            
            resultDiv.innerHTML = `<div class="alert alert-success">Converted Time: ${convertedTime}</div>`;
        } else {
            resultDiv.innerHTML = '<div class="alert alert-warning">Please enter a valid date and time.</div>';
        }
    });
}); 