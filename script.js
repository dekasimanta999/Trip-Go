// Preloader: Hide loader once page is loaded

  
  // Slide-in Animation for Tour Cards when they enter viewport
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".tour-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.3 });
    
    cards.forEach(card => observer.observe(card));
  });
  
  // Filter Tours Functionality
  function filterTours() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const priceFilter = document.getElementById("price-filter").value;
    const tours = document.querySelectorAll(".tour-card");
  
    tours.forEach(tour => {
      const title = tour.querySelector("h3").innerText.toLowerCase();
      const priceCategory = tour.getAttribute("data-price");
  
      const searchMatch = title.includes(searchInput);
      const priceMatch = priceFilter === "all" || priceCategory === priceFilter;
  
      tour.style.display = (searchMatch && priceMatch) ? "block" : "none";
    });
  }
  