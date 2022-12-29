const menu = document.querySelector('[data-menu]')
window.addEventListener('scroll', () => {
    let yCoordinates = this.pageYOffset
    if(yCoordinates > 300) {
        menu.classList.add('make-menu-bigger')
    }
    if(yCoordinates <= 300) {
        menu.classList.remove('make-menu-bigger')
    }
})