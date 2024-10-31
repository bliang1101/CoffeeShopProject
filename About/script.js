// Auto Text effect (integrating Udemy item):

// Here, geting the HTML element where the text will be displayed
const textEl = document.getElementById('about_us_text');

// using a variable and defining the text to be displayed letter by letter
const about_us_text = 'About Us';

// Initializing index to track the number of characters to display
let idx = 1;

// Setting the speed at which the text will be displayed (in milliseconds)
let speed = 300; 

// Function that will write the text letter by letter
function writeText() {
    // Set the inner text of the element to the substring of the about_us_text
    textEl.innerText = about_us_text.slice(0, idx); 
    idx++; // Increment the index to display the next character

    // Resetting the index to 1 when the full text has been displayed
    if (idx > about_us_text.length) {
        idx = 1; // Starting again from the first character
    }

    // Calling the writeText function again after the specified speed
    setTimeout(writeText, speed);
}

// Starting writing the text as soon as the script is executed
writeText();

//Faq expansion (integrating udemy course item): 
// Wait until the DOM content is fully loaded before executing the following code
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'faq-question'
    const faqs = document.querySelectorAll('.faq-question');
    
    // Add a click event listener to each FAQ question
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            // Get the next sibling element (the answer)
            const answer = faq.nextElementSibling; 
            // Toggle the 'active' class on the answer element to show/hide it
            answer.classList.toggle('active'); 
        });
    });
});
