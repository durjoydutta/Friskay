const menu = document.querySelector('nav ul');
const openBtn = document.querySelector('.menu_open');
const closeBtn = document.querySelector('.menu_close');

// Open menu
openBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    menu.classList.add('open');
});

// Close menu
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    menu.classList.remove('open');
});