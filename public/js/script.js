(function (document) {
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('#sidebar');
  const checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function (e) {
    const target = e.target;

    if (!checkbox.checked ||
      sidebar.contains(target) ||
      (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);

// this checks whether system dark mode is set
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// this checks for session storage telling to override
// the system preferences
let theme = localStorage.getItem('theme');

function prefersColorTest() {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("toggle-mode-cb").checked = true;
    // this clears the session storage
    localStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("toggle-mode-cb").checked = false;
    localStorage.setItem('theme', '');
  }
}

systemInitiatedDark.addEventListener("change", () => {
  prefersColorTest();
});

function modeSwitcher() {
  // it’s important to check for overrides again
  let theme = localStorage.getItem('theme');
  // checks if reader selected dark mode
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("toggle-mode-cb").checked = false;
    // checks if reader selected light mode
  } else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("toggle-mode-cb").checked = true;
    // checks if system set dark mode
  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("toggle-mode-cb").checked = false;
    // the only option left is system set light mode
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("toggle-mode-cb").checked = true;
  }
}
