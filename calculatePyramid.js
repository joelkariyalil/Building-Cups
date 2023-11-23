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

        // Perform the calculation
        let a = 1;
        let b = 1;
        let c = -2 * totalCups;
        let d = Math.pow(b, 2) - (4 * a * c);
        let sol1 = (-b - Math.sqrt(d)) / (2 * a);
        let sol2 = (-b + Math.sqrt(d)) / (2 * a);

        // Discarding the Negative Values
        let ans = Math.floor(sol2 < 0 ? sol1 : sol2);
        let val = (ans * (ans + 1)) / 2;

        // Prepare the result data
        let resultData = {
            'baseCups': ans,
            'usedCups': val,
            'remainingCups': totalCups - val
        };

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