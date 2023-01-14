const slides = document.querySelectorAll('.wrapper > div')

const buttons = document.querySelectorAll('.btn ul li')

window.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add('show-slide')
    buttons[0].classList.add('current-button')
})

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        for(let k = 0; k < buttons.length; k++) {
            slides[k].classList.remove('show-slide')
            buttons[k].classList.remove('current-button')
        }
        slides[i].classList.add('show-slide')
        buttons[i].classList.add('current-button')
    }
}