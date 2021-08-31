const headerFix = document.querySelector('.main-header');
const headerTextColors = document.querySelectorAll('.navigation__link');
const buttonChangeColor = document.querySelector('.login__button');
const logoLink = document.querySelector('.logo__link');
const logoLinkBlack = document.querySelector('.logo__link-black');

function chengTextColorBlack() {
    for (let headerTextColor of headerTextColors) {
        headerTextColor.style.color = 'black';
    }
}

function chengTextColorWhite() {
    for (let headerTextColor of headerTextColors) {
        headerTextColor.style.color = 'white';
    }
}

function addClass() {
    headerFix.classList.add('fixed-scroll');
    buttonChangeColor.classList.add('fixed-scroll');
    logoLink.classList.add('fixed-scroll');
    logoLinkBlack.classList.add('fixed-scroll');

}

function removeClass() {
    headerFix.classList.remove('fixed-scroll');
    buttonChangeColor.classList.remove('fixed-scroll');
    logoLink.classList.remove('fixed-scroll');
    logoLinkBlack.classList.remove('fixed-scroll');
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;


    if (scrollDistance > 10) {
        addClass();
        chengTextColorBlack();
    }

    if (10 > scrollDistance) {
        chengTextColorWhite();
        removeClass();
    }
});