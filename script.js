document.addEventListener('DOMContentLoaded', function() {
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var target = this.getAttribute('data-target');

            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });

    // Activate the first tab by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});

function scrollToMain() {
    var mainHeading = document.getElementById('modulos');
    mainHeading.scrollIntoView({ behavior: 'smooth' });
}