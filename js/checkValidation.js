// Проверка отправки сообщенией через форму

const userName = document.body.querySelector(".user-name")
const userTel = document.body.querySelector(".user-tel")
const userMessage = document.body.querySelector("input[name = 'user-message']")

const arrOfInput = [userName, userTel, userMessage]

const sendMessageBtn = document.body.querySelector('.btn')

const trueSendMessage = document.createElement('div')
trueSendMessage.innerHTML = "Сообщение отправлено. Мы свяжемся с вами в ближайшее время."

function checkInputFields(arr) {
    for (let inputValue of arr) {
        if (inputValue.value.trim() === '') {
            inputValue.style.setProperty("--c", "red")
        } else {
            inputValue.style.setProperty("--c", ""); 
        }
    }

    const hasEmptyFields = arr.some(element => element.value.trim() === '')

    if(!hasEmptyFields) {
        trueSendMessage.className = "trueValues"
        sendMessageBtn.replaceWith(trueSendMessage)
    }
}

sendMessageBtn.addEventListener("click", () => {
    checkInputFields(arrOfInput)
})