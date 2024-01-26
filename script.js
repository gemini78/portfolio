"use strict";

const boxes = document.querySelectorAll('.box');

const displayContent = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const topBox = box.getBoundingClientRect().top;

        if (topBox < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

window.addEventListener("scroll", displayContent);

/* carousel */

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('#home');
let listItemDom = document.querySelector('#home .list');
let thumbnailDom = document.querySelector('#home .thumbnail');
nextDom.onclick = () => {
    showSlider('next');
}

prevDom.onclick = () => {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun;
const showSlider = (type) => {
    let itemSlider = document.querySelectorAll('#home .list .item');
    let itemThumbnail = document.querySelectorAll('#home .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

showSlider('next');


const cards = document.querySelectorAll('#services .my-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped')
    });
})

