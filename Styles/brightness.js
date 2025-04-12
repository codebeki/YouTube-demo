// Function to change theme based on user system preference
    function updateTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className = 'dark-mode';
      } else {
        document.body.className = 'light-mode';
      }
    }

    // Initial theme detection
    updateTheme();

    // Listen for changes in system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);