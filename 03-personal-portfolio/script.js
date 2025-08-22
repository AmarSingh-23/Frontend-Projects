const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');

// Helper to set UI state
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        icon.src = 'image/light-mode.png';
        toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        icon.src = 'image/dark-mode.png';
        toggleBtn.setAttribute('aria-pressed', 'false');
    }
}

// Load saved theme or use system preference
const saved = localStorage.getItem('theme');
if (saved === 'dark') setTheme(true);
else if (saved === 'light') setTheme(false);
else setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Toggle handler (keyboard + mouse)
toggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Make toggle accessible via keyboard (Enter/Space) - button already handles this, but keep for clarity
toggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleBtn.click();
});