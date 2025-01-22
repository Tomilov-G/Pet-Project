// Cлайдер


const needElement = document.body.querySelector(".banner")

const arrOfImage = [
    "url('../assets/img/bg.png')",
    "url('../assets/img/bgi2.jpg')",
    "url('../assets/img/bgi3.jpg')",
    "url('../assets/img/bgi4.jpg')"
]

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