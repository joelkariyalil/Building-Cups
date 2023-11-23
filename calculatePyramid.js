async function calculatePyramid() {
    try {
        // Hide the result initially
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = '';
        resultElement.classList.remove("fadeInResult");

        // Get user input
        var totalCupsInput = document.getElementById("totalCups");
        var totalCups = parseInt(totalCupsInput.value);

        // Check if the input is a valid number
        if (isNaN(totalCups)) {
            alert("Please enter a valid number.");
            return;
        }

        // Call the Flask API to calculate the result
        const response = await fetch('http://localhost:5000/calculate_pyramid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ totalCups }),
        });

        console.log('Response:', response);

        if (!response.ok) {
            throw new Error('Failed to calculate the result.');
        }

        const resultData = await response.json();

        // Display the result with animation
        resultElement.innerHTML =
            `The total number of cups in the pyramid is: ${resultData.baseCups}, 
            Used Cups: ${resultData.usedCups}, Remaining Cups: ${resultData.remainingCups}`;
        resultElement.classList.add("fadeInResult");
    } catch (error) {
        console.error(error);
        alert('An error occurred while calculating the result.');
    }
}

// Clear the result when the input field is clicked
document.getElementById("totalCups").addEventListener("click", function () {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = '';
    resultElement.classList.remove("fadeInResult");
});
