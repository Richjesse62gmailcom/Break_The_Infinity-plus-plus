// Import break_eternity.js
const Decimal = require("break_eternity.js");

// Define your resource variable
let resource = new Decimal(0);

// Update resource display
function updateDisplay() {
  document.getElementById("resource").textContent = resource.toString();
}
updateDisplay(); // Initial update

// Clicker button functionality
document.getElementById("clicker").addEventListener("click", function () {
  resource = resource.add(1);
  updateDisplay();
});

// (Optional) Automatic resource generation
setInterval(function () {
  resource = resource.add(resource.div(1000)); // Increase resource every second based on current amount (adjust as needed)
  updateDisplay();
}, 1000); // Every 1000 milliseconds (1 second)
