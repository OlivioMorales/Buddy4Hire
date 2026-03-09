// Buddy4Hire Form Validation
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting until validated

    let errors = [];

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const packageChoice = document.getElementById("package").value;
    const date = document.getElementById("date").value;

    // Validate name
    if (name.length === 0) {
        errors.push("Please enter your name. George needs to know who he's judging.");
    }

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
        errors.push("Please enter a valid email address so George can ignore your messages properly.");
    }

    // Validate package selection
    if (packageChoice === "") {
        errors.push("Please choose a rental package. George insists on structure.");
    }

    // Validate date
    if (date === "") {
        errors.push("Please select a date. George needs to check his napping schedule.");
    }

    // Display errors or success
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Your request has been submitted! George will review it (eventually).");
        event.target.submit(); // Submit the form for real
    }
});