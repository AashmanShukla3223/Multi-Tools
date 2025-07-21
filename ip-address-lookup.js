document.getElementById('lookup-btn').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `
                <table class="table table-bordered">
                    <tbody>
                        <tr><th>IP Address</th><td>${data.ip}</td></tr>
                        <tr><th>City</th><td>${data.city}</td></tr>
                        <tr><th>Region</th><td>${data.region}</td></tr>
                        <tr><th>Country</th><td>${data.country_name}</td></tr>
                        <tr><th>ISP</th><td>${data.org}</td></tr>
                    </tbody>
                </table>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<div class="alert alert-danger">An error occurred: ${error}</div>`;
        });
}); 