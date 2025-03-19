const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

const toggleBtn = document.querySelector(".toggle-btn");
const bigWrapper = document.querySelector(".big-wrapper");
const themeIcon = document.querySelector("#theme-icon");

let darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") {
  bigWrapper.classList.add("dark");
  bigWrapper.classList.remove("light");
  themeIcon.classList.remove("fa-regular", "fa-sun");
  themeIcon.classList.add("fa-regular", "fa-moon");
} else {
  bigWrapper.classList.add("light");
  bigWrapper.classList.remove("dark");
  themeIcon.classList.remove("fa-regular", "fa-moon");
  themeIcon.classList.add("fa-regular", "fa-sun");
}

function toggleDarkMode() {
  if (bigWrapper.classList.contains("light")) {
    bigWrapper.classList.remove("light");
    bigWrapper.classList.add("dark");
    themeIcon.classList.remove("fa-regular", "fa-sun");
    themeIcon.classList.add("fa-regular", "fa-moon");
    localStorage.setItem("darkMode", "enabled");
  } else {
    bigWrapper.classList.remove("dark");
    bigWrapper.classList.add("light");
    themeIcon.classList.remove("fa-regular", "fa-moon");
    themeIcon.classList.add("fa-regular", "fa-sun");
    localStorage.setItem("darkMode", "disabled");
  }
}

toggleBtn.addEventListener("click", toggleDarkMode);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// Scroll Reveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1500,
};

ScrollReveal().reveal("section .container", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal("section img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal("footer", {
  ...scrollRevealOption,
  origin: "bottom",
});
