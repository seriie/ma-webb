// Function to toggle theme from header
function toggleTheme() {
    const checkbox = document.getElementById('theme-toggle');
    const checkboxHeader = document.getElementById('theme-toggle-header');
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
  
    if (isDarkMode) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.setItem("theme", "light-mode");
    }
    
    checkbox.checked = isDarkMode;
    checkboxHeader.checked = isDarkMode;
  }
  
  window.onload = function() {
    const checkbox = document.getElementById('theme-toggle');
    const checkboxHeader = document.getElementById('theme-toggle-header');
    
    if (localStorage.getItem("theme") === 'dark-mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-mode');
      checkbox.checked = true;
      checkboxHeader.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      checkbox.checked = false;
      checkboxHeader.checked = false;
    }
  }
  
  if(localStorage.theme == 'dark-mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('light-mode');
  }

// Function to toggle theme from sidenav
// function toggleThemeSidenav() {
//     const checkbox = document.getElementById('theme-toggle-sidenav');
//     const body = document.body;
//     const isDarkMode = body.classList.toggle('dark-mode');
  
//     if (isDarkMode) {
//       localStorage.setItem("theme", "dark-mode");
//     } else {
//       localStorage.setItem("theme", "light-mode");
//     }
    
//     checkbox.checked = isDarkMode;
//   }
  
//   window.onload = function() {
//     const checkbox = document.getElementById('theme-toggle-sidenav');
    
//     if (localStorage.getItem("theme") === 'dark-mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.body.classList.add('dark-mode');
//       checkbox.checked = true;
//     } else {
//       document.body.classList.add('light-mode');
//       checkbox.checked = false;
//     }
//   }
  
//   if(localStorage.theme == 'dark-mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.body.classList.add('dark-mode');
//   } else {
//     document.body.classList.remove('light-mode');
//   }


// // Function to toggle theme from sidenav
// function toggleThemeSidenav() {
//     const body = document.body;
//     const isDarkMode = body.classList.toggle('dark-mode');
    
//     if (isDarkMode) {
//         localStorage.setItem("theme", "dark-mode");
//     } else {
//         localStorage.setItem("theme", "light-mode");
//     }

//     // Sinkronkan posisi checkbox di header dan sidenav
//     document.getElementById('theme-toggle-header').checked = isDarkMode;
//     document.getElementById('theme-toggle-sidenav').checked = isDarkMode;
// }

// // Load theme preference from localStorage on page load
// document.addEventListener('DOMContentLoaded', function() {
//     const theme = localStorage.getItem("theme");
//     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (theme === 'dark-mode' || (!theme && prefersDarkScheme)) {
//         document.body.classList.add('dark-mode');
//         document.getElementById('theme-toggle-header').checked = true;
//         document.getElementById('theme-toggle-sidenav').checked = true;
//     } else {
//         document.body.classList.remove('dark-mode');
//         document.getElementById('theme-toggle-header').checked = false;
//         document.getElementById('theme-toggle-sidenav').checked = false;
//     }

//     // Tambahkan event listener untuk checkbox
//     document.getElementById('theme-toggle-header').addEventListener('click', toggleTheme);
//     document.getElementById('theme-toggle-sidenav').addEventListener('click', toggleThemeSidenav);
// });