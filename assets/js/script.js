// ======= Theme Mode Change
const root = document.documentElement;

// Get both the desktop and mobile theme toggle buttons
const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
const themeIconDesktop = document.getElementById("theme-icon-desktop");

const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const themeIconMobile = document.getElementById("theme-icon-mobile");

// Icons
const sunIcon = "assets/icons/moon.png";
const moonIcon = "assets/icons/sun.png";

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);

// Set initial icons for both buttons
if (themeIconDesktop) {
  themeIconDesktop.src = savedTheme === "dark" ? moonIcon : sunIcon;
}
if (themeIconMobile) {
  themeIconMobile.src = savedTheme === "dark" ? moonIcon : sunIcon;
}

// Toggle function for both buttons
function toggleTheme(e) {
  e.preventDefault();

  let currentTheme = root.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update icons for both buttons
  if (themeIconDesktop) {
    themeIconDesktop.src = newTheme === "dark" ? moonIcon : sunIcon;
  }
  if (themeIconMobile) {
    themeIconMobile.src = newTheme === "dark" ? moonIcon : sunIcon;
  }
}

// Attach event listeners to both buttons
if (themeToggleDesktop) {
  themeToggleDesktop.addEventListener("click", toggleTheme);
}
if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", toggleTheme);
}