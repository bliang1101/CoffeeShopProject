document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const reviewsSection = document.getElementById("reviewsSection");
    const reviewsList = document.getElementById("reviewsList");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Collect form data
      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const reviewText = document.getElementById("review").value.trim();
      const rating = document.querySelector("input[name='rating']:checked");
  
      // Basic validation
      if (!fname || !lname || !email || !reviewText || !rating) {
        alert("Please fill out all fields and select a rating.");
        return;
      }
  
      // Create a review element
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <h3>${fname} ${lname}</h3>
        <p>Email: ${email}</p>
        <p>Rating: ${rating.value} out of 5</p>
        <p>${reviewText}</p>
        <hr>
      `;
  
      // Add the new review to the list
      reviewsList.appendChild(reviewItem);
  
      // Clear the form
      form.reset();
    });
  });  
