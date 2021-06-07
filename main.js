function fun1(string) {
    let arr = string.split('')
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i != 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result.join('')
}

function fun2(string) {
    let arr = string.split('')
    let result = []
    for (let i = 0 ; i < arr.length; i++) {
        if (i != arr.length - 1) {
            result.push(arr[i])
        } else {
            result.unshift(arr[i])
        }
    }
    return result.join('')
}


const buttonMinus = document.querySelector('.buttonMinus')
const buttonPlus = document.querySelector('.buttonPlus')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const wordOutput = document.querySelector('.myWord')


form.addEventListener('submit', event =>{
    event.preventDefault()
    if(input.value.length > 1 && input.value.trim().length > 1){
        wordOutput.textContent = input.value;
    }
})

buttonPlus.addEventListener('click', event =>{
    wordOutput.textContent = fun1(wordOutput.textContent);
})

buttonMinus.addEventListener('click', event =>{
    wordOutput.textContent = fun2(wordOutput.textContent);
})