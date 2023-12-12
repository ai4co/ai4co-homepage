document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.navbar-menu');
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('is-active');
    });
});
