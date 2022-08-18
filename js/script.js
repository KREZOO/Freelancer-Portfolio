const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImage = document.querySelector('#nav-button-image');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navButtonImage.src = 'img/icons/nav-close.svg';
    } else {
        navButtonImage.src = '../img/icons/nav-open.svg';
    }
}