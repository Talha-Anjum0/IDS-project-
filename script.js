document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        alert("Message sent! We'll get back to you soon.");
        form.reset(); // Clear the form fields
    });
});