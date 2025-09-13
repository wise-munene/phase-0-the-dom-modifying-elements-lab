// Write your code here!
// Remove the main element
document.querySelector('main#main').remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set id to victory
newHeader.id = 'victory';

// Add the text
newHeader.textContent = "Wise is the champion";
