const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'great!'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'type gmail correctly'
        gmailResult.style.color = 'red'
    }
}


const childSquare = document.querySelector('.child_block')
let leftIndent = 0 

const moveSquare = () => {
    childSquare.style.left = `${leftIndent}px`
    leftIndent++
    if (leftIndent < 450) {
        moveSquare()
    }
}
moveSquare()