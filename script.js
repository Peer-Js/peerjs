const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

//why us section javascript code

document.addEventListener('DOMContentLoaded', function() {
    const readMoreIcons = document.querySelectorAll('.read-more-icon');
    
    readMoreIcons.forEach(readMoreIcon => {
        readMoreIcon.addEventListener('click', function() {
            const subSectionContainer = readMoreIcon.closest('.sub-section-container');
            const moreDetailsContainer = subSectionContainer.querySelector('.more-details-container');
            const iconImage = readMoreIcon.querySelector('.icon-image');
            
          
            subSectionContainer.classList.toggle('expanded');
            
            
           (subSectionContainer.classList.contains('expanded')) ? iconImage.src = 'images/angle-down.svg'
           : iconImage.src = 'images/enlarge.svg';
                
        });
        });
        });






