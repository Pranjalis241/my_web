function calculateScholarship() {
    // Get input values
    const name = document.getElementById('name').value.trim();
    const maths = document.getElementById('maths').value.trim();
    const english = document.getElementById('english').value.trim();
    const science = document.getElementById('science').value.trim();
    const computer = document.getElementById('computer').value.trim();
    const tenth = document.getElementById('tenth').value.trim();

    // Check if any field is empty
    if (!name || !maths || !english || !science || !computer || !tenth) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    // Parse the input values
    const mathsValue = parseInt(maths);
    const englishValue = parseInt(english);
    const scienceValue = parseInt(science);
    const computerValue = parseInt(computer);
    const tenthValue = parseInt(tenth);

    // Total fees
    const totalFees = 100000;
    let scholarship = 0;

    // Calculate 12th-grade percentage
    const twelfthPercentage = (mathsValue + englishValue + scienceValue + computerValue) / 4;

    // Check conditions
    if (tenthValue >= 90 && twelfthPercentage >= 90) {
        scholarship = 0.5 * totalFees; // 50% Scholarship
    } else if (tenthValue >= 80 && twelfthPercentage >= 80 && twelfthPercentage < 90) {
        scholarship = 0.25 * totalFees; // 25% Scholarship
    }

    // Display result
    if (scholarship > 0) {
        alert(`Congratulations, ${name}! You got a scholarship of ₹${scholarship}.`);
    } else {
        alert(`Sorry, ${name}. You did not qualify for a scholarship.`);
    }
}

function openterms(event) {
    event.preventDefault(); // Prevents the link from navigating
    const termsWindow = window.open(
        "terms.html",
        "Terms",
        "width=500,height=300"
    );
    termsWindow.focus();
}
window.onload = function() {  
    const termsLink = document.getElementById('termsLink');
    termsLink.addEventListener('click', openterms);
}

// Function to validate individual fields
function validateMarks(field) {
    const value = field.value.trim();
    const errorSpan = document.getElementById(`${field.id}Error`);

    // Check if the field is empty or not in the valid range
    if (!value || isNaN(value) || value < 0 || value > 100) {
        errorSpan.textContent = `${field.name} marks must be between 0 and 100!`;
        errorSpan.style.color = "red"; // Display the message in red
        field.focus(); // Set focus back to the invalid field
    } else {
        errorSpan.textContent = ""; // Clear the error message if valid
    }
}
