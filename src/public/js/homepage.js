const updateButton = document.querySelector('.createUserBotton')
const updateUserLayer = document.querySelector('.createUserWrapper')
const updateUserBackground = document.querySelector('.createUser-background')
updateButton.onclick = () => {
    updateUserLayer.style.cssText = "display: flex;"
    updateUserBackground.style.cssText = "display: block;"
}

updateUserBackground.onclick = () => {
    updateUserLayer.style.cssText = "display: none;"
    updateUserBackground.style.cssText = "display: none;"
}