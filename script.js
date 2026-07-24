const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9E-x84bCaKOAwe8BFGeABlF6JlXmh340k4iciSbd4NqbMNy4Z_daQrp9LfvQvM3Is/exec";

document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("city", city);

    fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
    })
    .then(() => {

        alert("Details submitted successfully!");

        const whatsappUrl =
            "https://wa.me/919619780690?text=" +
            encodeURIComponent(
                "Hi, my name is " + name +
                ". Phone: " + phone +
                ". City: " + city
            );

        fbq('track', 'Lead', {}, {
            event_callback: function () {
                window.location.href = whatsappUrl;
            }
        });

        // Fallback if callback doesn't fire
        setTimeout(function () {
            window.location.href = whatsappUrl;
        }, 1500);

        document.getElementById("leadForm").reset();

    })
    .catch(function (err) {
        console.error(err);
        alert("Connection failed.");
    });
});
