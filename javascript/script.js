"use script";
// changing desktop editor illustration to mobile
// const illustrationEditorDesktop = document.querySelector('.illustration-editor-desktop')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Implementing menu toggle

//Assigning variables
const navButton = document.querySelector('.nav-button-image');
const navContainer = document.querySelector('.nav-container');

navButton.addEventListener('click', () => {
    const clickNavButton = navButton.getAttribute('src');
    const showNavContainer = navContainer.getAttribute('data-visible');


    if (clickNavButton === './images/icon-hamburger.svg', showNavContainer == 'false') {
        navContainer.setAttribute('data-visible', true);
        document.body.style.position = 'fixed';
        navButton.setAttribute('src', './images/icon-close.svg')
    } else {
        navContainer.setAttribute('data-visible', false)
        document.body.style.position = 'unset';
        navButton.setAttribute('src', './images/icon-hamburger.svg')
    }
})
