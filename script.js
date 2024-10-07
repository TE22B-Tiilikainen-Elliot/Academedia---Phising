function registerClick() {
    fetch('http://localhost:8080/button-click', { 
        method: 'POST' 
    })
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("countDisplay").innerText =
          "Button pressed: " + data + " times";
    })
    .catch((error) => console.error('Error:', error));
}
