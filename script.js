function registerClick() {
    fetch('http://localhost:8080/button-click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('click-count').innerText = 'Click Count: ' + data;
    })
    .catch(error => console.error('Error:', error));
}