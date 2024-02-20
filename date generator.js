// Function to generate a random date suggestion
function generateDateSuggestion(option) {
    // Object containing options for each category
    var options = {
        dinner: [
            "Saltgrass steakhouse",
            "Nate's seafood & Steakhouse",
            "Sabor Llanero tx",
            "Kenny's Wood Fired Grill",
            "Thai cuisine",
            "Mediterranean restaurant",
            "French bistro",
            "Indian restaurant",
            "Meat point",
            "Lazy Dog Restaurant & Bar"
        ],
        lunch: [
            "Pacific Table",
            "Chili's",
            "El sinaloense",
            "Moxies",
            "Meso Maya Comida y Copas",
            "Postino Addison?",
            "Sidecar Social Addison",
            "BoomerJack's Grill",
            "The brunch district",
            "Gloria's"
        ],
        casual: [
            "Cold stone",
            "Puttshack Addison",
            "Twin Peaks",
            "Movies",
            "OAKD BBQ",
            "Italia express",
            "BoomerJack's Grill",
            "Sports City Cantina ",
            "Musuem",
            "The Melting Pot",
            "Bombshells Dallas"
        ]
    };

    // Selecting options based on the user's choice
    var chosenOptions = options[option];

    // Generate a random index to select an option from the chosen category
    var randomIndex = Math.floor(Math.random() * chosenOptions.length);
    
    // Return the selected date suggestion
    return option.charAt(0).toUpperCase() + option.slice(1) + " at " + chosenOptions[randomIndex];
}

// Get references to the buttons
var dinnerBtn = document.getElementById("dinnerBtn");
var lunchBtn = document.getElementById("lunchBtn");
var casualBtn = document.getElementById("casualBtn");

// Event listener for dinner button
dinnerBtn.addEventListener("click", function() {
    var dateBox = document.getElementById("dateBox");
    dateBox.innerText = generateDateSuggestion('dinner');
});

// Event listener for lunch button
lunchBtn.addEventListener("click", function() {
    var dateBox = document.getElementById("dateBox");
    dateBox.innerText = generateDateSuggestion('lunch');
});

// Event listener for casual button
casualBtn.addEventListener("click", function() {
    var dateBox = document.getElementById("dateBox");
    dateBox.innerText = generateDateSuggestion('casual');
});
