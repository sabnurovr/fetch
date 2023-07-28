const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /@gmail.com$/

gmail_button.addEventListener('click', () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'Ok'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'not ok'
        gmail_result.style.color = 'red'
    }
})

const child_block = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        child_block.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY < 449){
        positionY++
        child_block.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >0 && positionY >= 449){
        positionX--
        child_block.style.left = `${positionX}px`
        setTimeout(move, 1)
    }   else if (positionX >= 0 && positionY > 0){
        positionY--
        child_block.style.top = `${positionY}px`
        setTimeout(move, 1)
    }

}
move()

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const second = document.querySelector('#second')

let timerID
function timer(){
    seconds.innerText++
}
start.onclick=function (){
    clearInterval(timerID)
    timerID = setInterval(timer, 1000)
}
stop.onclick=function (){
    clearInterval(timerID)
}
reset.onclick=function (){
    seconds.innerText = '00'
}

