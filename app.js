const section = document.querySelectorAll('.section')
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

const pageTransitions = () => {
    // change active class to clicked button
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', () => {
            let currentButton = document.querySelectorAll('.active-btn')
            currentButton[0].className = currentButton[0].className.replace(' active-btn', '')
            sectionButton[i].className += ' active-btn'
        })
    }
}

pageTransitions()