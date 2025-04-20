document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        let response = await fetch("http://localhost:3000/contact", { // Ensure this URL is correct
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed to send message.");
        }

        let result = await response.json();
        alert(result.message);
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending message. Please try again.");
    }
});
