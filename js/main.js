// Cлайдер


const needElement = document.body.querySelector(".banner")

const image1 = needElement.style.backgroundImage = "url('../assets/img/bg.png')"
const image2 = needElement.style.backgroundImage = "url('../assets/img/bgi2.jpg')"
const image3 = needElement.style.backgroundImage = "url('../assets/img/bgi3.jpg')"
const image4 = needElement.style.backgroundImage = "url('../assets/img/bgi4.jpg')"

const arrOfImage = [image1,image2,image3,image4]
let currentIndexOfImage = 0

function nextImage(arr) {
    currentIndexOfImage = (currentIndexOfImage + 1) % arr.length
    needElement.style.backgroundImage = arr[currentIndexOfImage]
}

function prevImage(arr) {
    currentIndexOfImage = (currentIndexOfImage - 1 + arr.length) % arr.length
    needElement.style.backgroundImage = arr[currentIndexOfImage]
}

document.querySelector(".right-arrow").addEventListener("click", () => {
    nextImage(arrOfImage)
})

document.querySelector(".left-arrow").addEventListener("click", () => {
    prevImage(arrOfImage);
});



// Отправка сообщенией


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






