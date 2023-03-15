const logo = document.querySelector('.mobileMenu');
const menu = document.querySelector('.mobilePop');

logo.addEventListener('click', () => {
    menu.classList.toggle('showmenu');
});

document.querySelectorAll('.mobileItem').forEach((n) => n.addEventListener('click', () => {
    menu.classList.remove('showmenu');
}));
