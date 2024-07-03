// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const accordionContainer = document.querySelectorAll('.accordion-container')
const accordionHeaders = document.querySelectorAll('.accordion-header')


accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling;

        content.classList.toggle('active')


        const svg = header.getElementsByTagName('svg')

        svg[0].classList.toggle('active')
        svg[1].classList.toggle('active')

        console.log(svg)


        accordionHeaders.forEach(content => {
            content !== this && content.nextElementSibling.classList.remove('active')
        })
        console.log(content)
    })
})

const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('body');

const scrollProgressBar = () => {
    let scrollDistance = -(section.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (section.getBoundingClientRect().height -
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);


