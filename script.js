"use strict";



document.addEventListener('DOMContentLoaded', function () {

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

    /* navigation bar color change */
    var changeColor = function () {
        console.log('scroll');
        var scroll_start = 0;
        var startchange = document.getElementById('start');
        var offset = startchange.offsetTop;
        if (startchange) {
            window.addEventListener('scroll', function () {
                scroll_start = window.scrollY;
                if (scroll_start > offset) {
                    document.querySelector('.navbar').classList.add('bg-cloud');
                } else {
                    document.querySelector('.navbar').classList.remove('bg-light');
                    document.querySelector('.navbar').classList.remove('bg-cloud');
                    console.log('portfolio out');
                }
            });
        }
    };

    /* page scroll on click */
    var scroll = function () {
        var pageScrollLinks = document.querySelectorAll('.page-scroll a');
        pageScrollLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    event.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    changeColor();
    scroll();
});
