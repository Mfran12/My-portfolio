// Default theme state
let isDarkMode = true;

// Cache the body element
const body = document.body;

// Select the button
const toggleBtn = document.getElementById('toggleThemeBtn');

// Add initial styles to the button
toggleBtn.style.cssText = `
  background: #eebbc3;
  color: #232946;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(35, 41, 70, 0.15);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
`;

// Optional: set initial theme
applyDarkTheme();

// Button click event
toggleBtn.addEventListener('click', function () {
  if (isDarkMode) {
    applyLightTheme();
  } else {
    applyDarkTheme();
  }
  isDarkMode = !isDarkMode;
});

// Theme functions
function applyDarkTheme() {
  body.style.backgroundColor = '#232946';
  body.style.color = '#d1c5fc';
}

function applyLightTheme() {
  body.style.backgroundColor = '#f5f5f5';
  body.style.color = '#232946';
}
