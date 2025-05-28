const container = document.getElementById('container');
const toggleLabel = document.getElementById('toggleLabel');

function toggleForm() {
  container.classList.toggle('signup-active');
  toggleLabel.textContent = container.classList.contains('signup-active') ? 'Login' : 'Sign Up';
}
document.getElementById("login").addEventListener("click", () => {
  // Get role from dropdown
  const role = document.getElementById("roleSelect").value;
  // Save to localStorage
  localStorage.setItem("role", role);
  window.location.href = "dashboard.html";
});
const role = localStorage.getItem("role") || "farmer"; // Default to farmer if no role is set

if (role === "expert") {
  // Hide elements specific to farmers
  document.querySelector(".ask-form").style.display = "none";
  document.querySelector(".experts").style.display = "none";
} else {
  // Hide elements specific to experts
  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach(btn => btn.style.display = "none");
}

