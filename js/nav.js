document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.navbar-menu');
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('is-active');
    });
});

document.querySelector('.navbar-icon').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('show');
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
  