const sections = document.querySelectorAll('.section')
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

const pageTransitions = () => {
    // change active class to clicked button
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', () => {
            let currentButton = document.querySelectorAll('.active-btn')
            currentButton[0].className = currentButton[0].className.replace(' active-btn', '')
            sectionButton[i].className += ' active-btn'
        })
    }
    
    allSections.addEventListener('click', (e) => {
        // console.log(e.target)
        const id = e.target.dataset.id
        if (id) {
            sectionButton.forEach((button) => {
                button.classList.remove('active')
            }) 
            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}

pageTransitions()