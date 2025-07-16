'use strict';

const parentNavBtn = document.querySelector('.hero--nav-btns');
const allNav = document.querySelectorAll('.hero--nav-btn');
const heroTextGroup = document.querySelector('.hero--title');
const heroImage = document.querySelectorAll('.hero--container');

let i = 0;

//////////////////////////////
// HERO SECTION NAVIGATION //
////////////////////////////

const changeHero = function (num) {
    heroImage.forEach(abc => abc.classList.remove('active-hero-container'));

    heroImage[num].classList.add('active-hero-container');

    allNav.forEach(abc => abc.classList.remove('active--nav-btn')
    )
    allNav[num].classList.add('active--nav-btn');
}

parentNavBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('hero--nav-btn')) return;
    const currImg = Number.parseInt(e.target.getAttribute('data-tag')) - 1;
    i = currImg;
    changeHero(currImg);
})

setInterval(() => {
    changeHero(i);
    i += 1;
    if (i === 3) i = 0;
}, 5000);