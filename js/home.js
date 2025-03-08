// Select the company menu link and submenu
// const companyLink = document.getElementById("aboutUs");
// const companyItems = document.getElementById("aboutUsDetails");

// const menuShow = document.querySelectorAll(".menu-link");
// const menuHidden = document.querySelectorAll(".submenu-items")

// Add event listeners for mouseenter and mouseleave
menuShow.addEventListener("mouseenter", () => {
  companyItems.style.display = "block"; // Show the submenu
  companyItems.style.opacity = 1; // Show the submenu
});

menuHidden.addEventListener("mouseleave", () => {
  companyItems.style.display = "none"; // Hide the submenu
});


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const button = document.querySelector('.menu-btn');
  sidebar.classList.toggle('show');
  button.classList.toggle('active');
}
function toggleSubmenu(event, submenuId) {
  event.preventDefault();
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
