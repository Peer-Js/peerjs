const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
