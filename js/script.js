const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImage = document.querySelector('#nav-button-image');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navButtonImage.src = 'img/icons/nav-close.svg';
    } else {
        navButtonImage.src = 'https://cdn.discordapp.com/attachments/921436338316800010/1010197589687271454/nav-open.png';
    }
}
