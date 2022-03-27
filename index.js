const generateBtn = document.querySelector('.generate-button')
const chars = String.fromCharCode(...Array(123).keys()).slice(33)

let passwordBoxes = document.querySelectorAll(".password-area")

generateBtn.addEventListener("click", generatePasswords)

function generatePasswords() {
    let result = " "
    let passwordArray = []
    const lengthOfPassword = 17

    for (let i = 0; i < 4; i++) {
        result = " "

        for (let j = 0; j < lengthOfPassword; j++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        passwordArray.push(result)
    }

    for (let k = 0; k < passwordBoxes.length; k++) {
        passwordBoxes[k].textContent = passwordArray[k]
    }
}