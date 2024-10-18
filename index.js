document.getElementById("clickButton").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Check if the button has already been clicked
    if (localStorage.getItem("buttonClicked")) {
        console.log("You have already submitted your input.");
        return; // Exit if the button has been clicked
    }

    // If not clicked, send the POST request
    fetch("http://localhost:8080/button-click", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("click-count").innerText =
                "Click Count: " + data;
            // Store in local storage to prevent further submissions
            localStorage.setItem("buttonClicked", "true");
        })
        .catch((error) => console.error("Error:", error));
});