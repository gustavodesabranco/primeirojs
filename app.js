'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "dark-theme") {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
    console.log('current class name: ' + className);
});

