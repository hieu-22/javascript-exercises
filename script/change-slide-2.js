const slides = document.querySelectorAll('.slide')
const buttons = document.querySelectorAll('.list__button-item')
const overlays = document.querySelector
window.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add("show-slide")
})

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        // show slide
        for(let k = 0; k < buttons.length; k++) {
            slides[k].classList.remove('show-slide')
        }
        slides[i].classList.add('show-slide')

        // show animation

    })
}