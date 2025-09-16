const body = document.body;
const toggleBtn = document.getElementById("darkModeToggle");

// Cek preferensi dark mode
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Klik toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
