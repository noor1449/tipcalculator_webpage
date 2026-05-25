function calculate() {
    let billInput = document.getElementById("bill").value;
    let tipInput = document.getElementById("tip").value;
    let peopleInput = document.getElementById("people").value;

    let bill = Number(billInput);
    let tip = Number(tipInput);
    let people = Number(peopleInput);

    let errorElement = document.getElementById("billError");

    // If fields are empty, reset display to 0 and exit early (no error message needed yet)
    if (billInput === "" || tipInput === "" || peopleInput === "") {
        resetDisplay();
        errorElement.innerText = "";
        return;
    }

    // Check for negative numbers or 0 people
    if (bill < 0 || tip < 0 || people <= 0) {
        errorElement.innerText = "Please enter valid positive numbers. People must be 1 or more.";
        resetDisplay();
        return; 
    } else {
        errorElement.innerText = ""; // Clear error message if inputs are valid
    }

    // 3. Perform Calculations
    let totalTip = (bill * tip) / 100;
    let grandTotal = bill + totalTip;
    let perPerson = grandTotal / people;

    // 4. Output the results rounded to 2 decimal places
    document.getElementById("totalTip").innerText = totalTip.toFixed(2);
    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
    document.getElementById("perPerson").innerText = perPerson.toFixed(2);
}

// Helper function to reset the numbers back to 0.00 if input is invalid or empty
function resetDisplay() {
    document.getElementById("totalTip").innerText = "0.00";
    document.getElementById("grandTotal").innerText = "0.00";
    document.getElementById("perPerson").innerText = "0.00";
}