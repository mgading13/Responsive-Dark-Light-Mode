const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

const toggleBtn = document.querySelector(".toggle-btn");
const bigWrapper = document.querySelector(".big-wrapper");
const themeIcon = document.querySelector("#theme-icon");

let darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") {
  bigWrapper.classList.add("dark");
  bigWrapper.classList.remove("light");
  themeIcon.src = "assets/moon.png";
}

function toggleDarkMode() {
  if (bigWrapper.classList.contains("light")) {
    bigWrapper.classList.remove("light");
    bigWrapper.classList.add("dark");
    themeIcon.src = "assets/moon.png";
    localStorage.setItem("darkMode", "enabled");
    bigWrapper.classList.remove("dark");
    bigWrapper.classList.add("light");
    themeIcon.src = "assets/summer.png";
    localStorage.setItem("darkMode", "disabled");
  }
}

toggleBtn.addEventListener("click", toggleDarkMode);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
