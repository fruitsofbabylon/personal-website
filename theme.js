var light = document.querySelector('input#light');
var dark = document.querySelector('input#dark');

light.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

dark.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})