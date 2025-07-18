'use strict';

// Swiper initialization for hero section
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Counter animation for .good-number
window.addEventListener('DOMContentLoaded', function () {
    const goodNumbers = document.querySelectorAll('.good-number');
    if (!goodNumbers.length) return;

    // First counter: 0 to 8+
    let count1 = 0;
    const target1 = 8;
    const interval1 = 100; // ms
    const increment1 = 1;

    const counter1 = setInterval(() => {
        count1 += increment1;
        if (count1 >= target1) {
            goodNumbers[0].textContent = target1 + '+';
            clearInterval(counter1);
        } else {
            goodNumbers[0].textContent = count1;
        }
    }, interval1);

    // Second counter: 0 to 1000+
    let count2 = 0;
    const target2 = 1000;
    const interval2 = 2; // ms (fast for large number)
    const increment2 = 10;

    const counter2 = setInterval(() => {
        count2 += increment2;
        if (count2 >= target2) {
            goodNumbers[1].textContent = target2 + '+';
            clearInterval(counter2);
        } else {
            goodNumbers[1].textContent = count2;
        }
    }, interval2);
});

// Move to the top

const btn = document.querySelector('.redirect-home');
const topNav = document.querySelector('.top-nav');
const navBtn = document.querySelectorAll('.hero-btn');
const form = document.querySelector('.appointment-section');
const sessionBtn = document.querySelector('.good-btn');
const bookBtn = document.querySelector('.book-slot');


const redirectToForm = function () {
    console.log("hiii there");
    form.scrollIntoView({
        behavior: 'smooth',
    })
}

btn.addEventListener('click', function () {
    topNav.scrollIntoView({
        behavior: "smooth",

    })
})

navBtn.forEach(abc => abc.addEventListener('click', redirectToForm));
sessionBtn.addEventListener('click', redirectToForm);
bookBtn.addEventListener('click', redirectToForm);