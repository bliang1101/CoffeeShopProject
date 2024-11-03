document.addEventListener("DOMContentLoaded", () => {
    // Filter menu items based on user input
    const filterInput = document.createElement("input");
    filterInput.type = "text";
    filterInput.placeholder = "Search menu...";
    filterInput.classList.add("filter-input");
    
    // Insert filter input at the top of the menu
    const menu = document.querySelector(".menu");
    menu.insertBefore(filterInput, menu.firstChild);
  
    // Event listener for filtering items
    filterInput.addEventListener("input", () => {
      const filterValue = filterInput.value.toLowerCase();
      const items = document.querySelectorAll(".menu ul li");
  
      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(filterValue)) {
          item.style.display = ""; // Show item
        } else {
          item.style.display = "none"; // Hide item
        }
      });
    });
  
    // Toggle visibility of each section (drinks and snacks)
    const sections = document.querySelectorAll(".menu section");
  
    sections.forEach(section => {
      const toggleButton = document.createElement("button");
      toggleButton.textContent = "Hide " + section.querySelector("h2").textContent;
      toggleButton.classList.add("toggle-button");
      section.insertBefore(toggleButton, section.firstChild);
  
      toggleButton.addEventListener("click", () => {
        const itemList = section.querySelector("ul");
        if (itemList.style.display === "none") {
          itemList.style.display = ""; // Show items
          toggleButton.textContent = "Hide " + section.querySelector("h2").textContent;
        } else {
          itemList.style.display = "none"; // Hide items
          toggleButton.textContent = "Show " + section.querySelector("h2").textContent;
        }
      });
    });
  });
  
