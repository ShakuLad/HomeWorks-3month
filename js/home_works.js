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

// const childSquare = document.querySelector('.child_block')

// let positionX = 0 
// let positionY = 0 

// const moveSquare = () => {
//     if (positionX < 446.5 && positionY === 0) {
//         positionX++
//         childSquare.style.left = `${positionX}px`
//         setTimeout(moveSquare,-10)
//     } else if (positionX >= 446.5 && positionY < 447) {
//         positionY++
//         childSquare.style.top = `${positionY}px`
//         setTimeout(moveSquare,1)
//     } else if (positionX >= 1 && positionY >= 447) {
//         positionX--
//         childSquare.style.left = `${positionX}px`
//         setTimeout(moveSquare,1)
//     } else if (positionX <= 1 && positionY >= 0) {
//         positionY--
//         childSquare.style.top = `${positionY}px`
//         setTimeout(moveSquare,1)
//     }
// }
// moveSquare()   это был мой код по квадрату

const parentSquare = document.querySelector('.parent_block');
const childSquare = document.querySelector('.child_block');

const parentSize = 500;
const childSize = 50; // Размер круга (дочернего квадрата)
const radius = (parentSize - childSize) / 2; // Радиус кругового движения

let angle = 0;

const moveSquare = () => {
    angle += 0.01; // Изменяем угол для создания кругового движения
    const x = Math.cos(angle) * radius + radius; // Вычисляем новую позицию X
    const y = Math.sin(angle) * radius + radius; // Вычисляем новую позицию Y

    childSquare.style.left = `${x}px`;
    childSquare.style.top = `${y}px`;

    requestAnimationFrame(moveSquare);
};
moveSquare(); //                                       а это код gpt

const counter = document.querySelector('#seconds')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const resumeButton = document.querySelector('#resume')


let interval;
let seconds = 0;
let paused = false; 


const startTimer = () => {
    seconds++
    counter.innerHTML = seconds;
}

startButton.onclick = () => {
    if (!paused) {
        interval = setInterval(startTimer, 1000);
        paused = true;
    }
}

stopButton.onclick = () => {
    clearInterval(interval);
    paused = false
}

resetButton.onclick = () => {
    clearInterval(interval);
    seconds = 0;
    counter.innerHTML = '0';
    paused = false
}

resumeButton.onclick = () => {
    if (!paused) {
        interval = setInterval(startTimer, 1000);
        paused = true;
    }
}