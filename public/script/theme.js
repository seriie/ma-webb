// Function to toggle theme from header
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "light-mode");
    }

    // Sinkronkan status checkbox di header dan sidenav
    document.getElementById('theme-toggle-header').checked = isDarkMode;
    document.getElementById('theme-toggle-sidenav').checked = isDarkMode;
}

// Function to toggle theme from sidenav
function toggleThemeSidenav() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "light-mode");
    }

    // Sinkronkan status checkbox di header dan sidenav
    document.getElementById('theme-toggle-header').checked = isDarkMode;
    document.getElementById('theme-toggle-sidenav').checked = isDarkMode;
}

// Load theme preference from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark-mode' || (!theme && prefersDarkScheme)) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle-header').checked = true;
        document.getElementById('theme-toggle-sidenav').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle-header').checked = false;
        document.getElementById('theme-toggle-sidenav').checked = false;
    }

    // Tambahkan event listener untuk checkbox
    document.getElementById('theme-toggle-header').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-sidenav').addEventListener('click', toggleThemeSidenav);
});