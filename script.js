const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9E-x84bCaKOAwe8BFGeABlF6JlXmh340k4iciSbd4NqbMNy4Z_daQrp9LfvQvM3Is/exec";

document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if (result.success) {
            alert("Details submitted successfully!");

            window.open(
                "https://wa.me/919619780690?text=" +
                encodeURIComponent(
                    `Hi, my name is ${data.name}.
Phone: ${data.phone}.
City: ${data.city}.`
                ),
                "_blank"
            );

            document.getElementById("leadForm").reset();
        } else {
            alert("Could not save data.");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Connection failed.");
    });
});
