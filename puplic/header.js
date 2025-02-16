// header area starts.....................
const staticHeader = document.querySelector(".static-header");
const fixedHeader = document.querySelector(".fixed-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > staticHeader.offsetHeight) {
    fixedHeader.classList.remove("hidden");
    fixedHeader.style.transform = "translateY(0)";
  } else {
    fixedHeader.classList.add("hidden");
    fixedHeader.style.transform = "translateY(-100%)";
  }
});

//responsive header

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if the screen is in mobile view.
  function isMobileScreen() {
    return window.innerWidth <= 960;
  }

  // Function to toggle dropdown visibility.
  function toggleDropdown(button, dropdown, icon, openIcon, closeIcon) {
    if (!isMobileScreen()) return; // Only work on mobile view.
    
    if (dropdown.classList.contains("active")) {
      // Close dropdown.
      dropdown.style.maxHeight = "0px";
      dropdown.style.opacity = "0";
      setTimeout(() => {
        dropdown.classList.remove("active");
        dropdown.style.visibility = "hidden";
        icon.src = openIcon; // Revert to default icon.
      }, 300);
    } else {
      // Open dropdown.
      dropdown.style.visibility = "visible";
      dropdown.classList.add("active");
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      dropdown.style.opacity = "1";
      icon.src = closeIcon; // Change to X icon.
    }
  }

  // Process .menu-button (login section)
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((button) => {
    // Find the closest parent container that contains this button's dropdown.
    // For example, assume the login dropdown is inside a container with class "logins-section".
    const parent = button.closest(".logins-section");
    if (!parent) return;
    const dropdown = parent.querySelector(".dropdown");
    const icon = button.querySelector("img");
    if (!dropdown || !icon) return;

    const openIcon = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; // Default menu icon.
    const closeIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"; // X icon.

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleDropdown(button, dropdown, icon, openIcon, closeIcon);
    });
  });

  // Process .nav-button (navigation section)
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    // Find the closest parent nav element containing the navDropdown.
    const parent = button.closest("nav");
    if (!parent) return;
    const dropdown = parent.querySelector(".navDropdown");
    const icon = button.querySelector("img");
    if (!dropdown || !icon) return;

    const openIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828859.png"; // Default nav icon.
    const closeIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"; // X icon.

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleDropdown(button, dropdown, icon, openIcon, closeIcon);
    });
  });

  // Attach one document-level click listener to close all dropdowns when clicking outside.
  document.addEventListener("click", function (event) {
    if (!isMobileScreen()) return; // Only run on mobile view.

    // Close all login dropdowns.
    menuButtons.forEach((button) => {
      const parent = button.closest(".logins-section");
      if (!parent) return;
      const dropdown = parent.querySelector(".dropdown");
      const icon = button.querySelector("img");
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.maxHeight = "0px";
        dropdown.style.opacity = "0";
        setTimeout(() => {
          dropdown.classList.remove("active");
          dropdown.style.visibility = "hidden";
          icon.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
        }, 300);
      }
    });

    // Close all navigation dropdowns.
    navButtons.forEach((button) => {
      const parent = button.closest("nav");
      if (!parent) return;
      const dropdown = parent.querySelector(".navDropdown");
      const icon = button.querySelector("img");
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.maxHeight = "0px";
        dropdown.style.opacity = "0";
        setTimeout(() => {
          dropdown.classList.remove("active");
          dropdown.style.visibility = "hidden";
          icon.src = "https://cdn-icons-png.flaticon.com/512/1828/1828859.png";
        }, 300);
      }
    });
  });
});
