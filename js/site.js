//// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
//// for details on configuring this project to bundle and minify static web assets.

//// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', (event) => {
    tsParticles.load('tsparticles', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 1,
                random: false
            },
            size: {
                value: 5,
                random: true
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});


var accordionContainer = document.querySelectorAll('.accordion-container')
var accordionHeaders = document.querySelectorAll('.accordion-header')


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


