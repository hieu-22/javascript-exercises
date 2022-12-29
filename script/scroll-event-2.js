const sideContent3 = document.querySelector('.side-3')
const menu  = document.querySelector('.menu')
const sideContent4 = document.querySelector('.side-4')
const sideContent4Text = document.querySelector('.side-4__text')

window.addEventListener('scroll', () => {
    let yCoordinate = this.pageYOffset
    // for side 3
    if (yCoordinate > 1873) {
        sideContent3.classList.remove('expand-side-3')
    } else if(yCoordinate < 1500) {
        sideContent3.classList.remove('expand-side-3')
    } else if(yCoordinate > 1500) {
        sideContent3.classList.add('expand-side-3')
    }
    // for menu
    if(yCoordinate > 76) {
        menu.classList.add('fix-menu-top')
    } else if(yCoordinate < 76) {
        menu.classList.remove('fix-menu-top')
    }
    // for side 4
    if(yCoordinate > 1873) {
        sideContent4.classList.add('show-side-4')
        sideContent4Text.classList.add('show-side-4__text')
    } else if(yCoordinate < 1873) {
        sideContent4.classList.remove('show-side-4')
        sideContent4Text.classList.remove('show-side-4__text')
    }
})
