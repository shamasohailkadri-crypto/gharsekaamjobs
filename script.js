const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9E-x84bCaKOAwe8BFGeABlF6JlXmh340k4iciSbd4NqbMNy4Z_daQrp9LfvQvM3Is/exec";

document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("city", document.getElementById("city").value);

    fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function() {
        alert("Details submitted successfully!");

        window.open(
            "https://wa.me/919619780690?text=Hi, I have submitted the form.",
            "_blank"
        );

        document.getElementById("leadForm").reset();
    })
    .catch(function(error) {
        console.error(error);
        alert("Connection failed.");
    });
});