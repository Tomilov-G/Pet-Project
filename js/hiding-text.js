const seoTextFirstBlock = document.getElementById("seo-first__block")
const seoTextSecondBlock = document.getElementById("seo-second__block")
const seoTextThirdBlock = document.getElementById("seo-third__block")


function removeSeoText() {
    const screenWidth = window.innerWidth
    const arrOfSeoText = [seoTextFirstBlock,seoTextSecondBlock,seoTextThirdBlock]

    if (screenWidth < 620) {

        for (let seoText of arrOfSeoText) {
            if (seoText) {
                seoText.style.display = "none"
            } 
        }

        const visibleSeoText = document.body.querySelector(".text-p__seo")

        if(!document.body.querySelector(".moreDetailed")) {
            const btnDetailed = document.createElement('p')
            btnDetailed.innerHTML = "Подробнее &#9660"
            btnDetailed.className = "moreDetailed"

            if (visibleSeoText) {
                visibleSeoText.append(btnDetailed);
            }

            // Добавляем обработчик для кнопки "Подробнее"
            btnDetailed.addEventListener("click", () => {
                restoreSeoText();
                btnDetailed.remove(); // Убираем кнопку после восстановления текста
            });
        }
    } else {
        restoreSeoText(); // Если экран стал шире 620px, текст возвращается автоматически

        const btnDetailed = document.body.querySelector(".moreDetailed");
        if (btnDetailed) {
            btnDetailed.remove();
        }
    }
}

function restoreSeoText() {
    const arrOfSeoText = [seoTextFirstBlock, seoTextSecondBlock, seoTextThirdBlock];

    for (let seoText of arrOfSeoText) {
        if (seoText) {
            seoText.style.display = ""; // Показываем элемент (возвращаем стандартный стиль)
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    removeSeoText();
    window.addEventListener("resize", removeSeoText);
});
