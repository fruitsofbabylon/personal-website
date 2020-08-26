var navigation = document.querySelector('nav');
var menuButton = document.querySelector('a.mobile-toggle');

menuButton.addEventListener ('click', function() {
    if (navigation.className === 'header-nav') {
        navigation.className += ' responsive';
    } else {
        navigation.className = 'header-nav';
    }
})