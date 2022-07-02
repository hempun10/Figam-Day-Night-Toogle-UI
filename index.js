document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
        document.documentElement.classList.toggle('switch');
    });
  });

const button = document.querySelector('.icon-button.inline');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a');
const colorInput = document.querySelector('.color-input-area input');
const colorArea = document.querySelector('.color-input-area');

button.addEventListener('click', function() {
    nav.classList.toggle('is-opened');
    links.forEach(function(link, index) {
      link.setAttribute('style', `animation-delay: ${index * .1}s`);
    });
  });

  colorInput.addEventListener('keyup', (e) => {
      colorArea.style.backgroundColor = e.target.value;
     colorArea.style.borderColor = e.target.value;
  });