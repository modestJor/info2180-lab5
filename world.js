document.addEventListener('DOMContentLoaded', function() {
    const lookupbtn = document.getElementById('lookup');
    const countryInput = document.getElementById('country');
    const resultsDiv = document.getElementById('result');

    lookupbtn.addEventListener('click', function() {
        const country = countryInput.value.trim();

        const xhr = new XMLHttpRequest();
        let url = 'world.php';
        if (country) {
            url += '?country=' + encodeURIComponent(country);
        }
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resultsDiv.innerHTML = xhr.responseText;
            } else {
                resultsDiv.innerHTML = 'Error retrieving data.';
            }
        };
        xhr.send();
    });
});
