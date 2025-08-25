// public/theme.js
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggle.checked = true;
} else {
  html.classList.remove("dark");
  themeToggle.checked = false;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
