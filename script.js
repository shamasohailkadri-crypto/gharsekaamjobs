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
    .then(() => {

        alert("Details submitted successfully!");

        fbq('track', 'Lead', {}, {
            event_callback: function () {

                window.location.href =
                    "https://wa.me/919619780690?text=" +
                    encodeURIComponent(
                        "Hi, my name is " +
                        document.getElementById("name").value +
                        ". Phone: " +
                        document.getElementById("phone").value +
                        ". City: " +
                        document.getElementById("city").value
                    );

                document.getElementById("leadForm").reset();
            }
        });

        // Fallback: if Meta callback doesn't fire, still open WhatsApp after 2 seconds
        setTimeout(function () {
            window.location.href =
                "https://wa.me/919619780690?text=" +
                encodeURIComponent(
                    "Hi, my name is " +
                    document.getElementById("name").value +
                    ". Phone: " +
                    document.getElementById("phone").value +
                    ". City: " +
                    document.getElementById("city").value
                );

            document.getElementById("leadForm").reset();
        }, 2000);

    })
    .catch(function(err) {
        console.error(err);
        alert("Connection failed.");
    });
});
