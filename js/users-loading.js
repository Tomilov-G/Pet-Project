
const loadCharactersButton = document.querySelector('.load__users')
const ulList = document.createElement('ul')

async function fetchCharacters(url) {
        try {
            const response = await fetch(url);
            const json = await response.json()

            for (let character of json.results) {

                const nameOfCharacters = character.name
                const statusOfCharacters = character.status

                const liElementOfList = document.createElement('li')
                liElementOfList.textContent = `${nameOfCharacters} - ${statusOfCharacters}`
                ulList.append(liElementOfList)
            }
        } catch (err) {
            console.error(err.message)
        }
    }

loadCharactersButton.addEventListener("click", async () => {
    ulList.innerHTML = "";
    await fetchCharacters('https://rickandmortyapi.com/api/character');
    loadCharactersButton.after(ulList)
})
