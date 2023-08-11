const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{7,20}@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'great!' //(перевод) отлично
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'type gmail correctly' //(перевод) введите gmail правильно
        gmailResult.style.color = 'red'
    }
    const val = gmailInput.value.length // это если пользователь введет больше или меньше символов (сделал для себя)
    if (val > 30) {
        gmailResult.innerHTML = 'the number of characters must vary from 7-20' //(перевод) количество символов должно варьироваться от 7 до 20
        gmailResult.style.color = 'red'
    } else if (val < 17) {
        gmailResult.innerHTML = 'the number of characters must vary from 7-20' //(перевод) количество символов должно варьироваться от 7 до 20
        gmailResult.style.color = 'red'
    }
}
// код не доработан, но хотя бы изменения есть, надо в будущем сделать так чтобы если пользователь напишет допустим 's', то надо чтобы не выводилось 'количество символов должно варьироваться от 7 до 20' идея осуществима но щас сложно будет, сделай как будешь готов (памятка: надо сделать так чтобы val считалось без 10 символов то есть без @gmail.com)
const childSquare = document.querySelector('.child_block')
let leftIndent = 0 

const moveSquare = () => {
    childSquare.style.left = `${leftIndent}px`
    leftIndent++
    if (leftIndent < 448) {
        moveSquare()
    }
}
moveSquare()