document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.navbar-menu');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            menuButton.classList.toggle('is-active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.navbar-icon');
    var menuContainer = document.querySelector('.navbar-menu');
    
    if (menuIcon && menuContainer) {
        menuIcon.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
        });
    }
});

function copyToClipboard(element) {
    var text = document.querySelector(element).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  
    // Optional: Show an alert or change the button text to give feedback
    alert("Copied to clipboard");
}
  