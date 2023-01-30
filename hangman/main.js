const letters = document.getElementById("word");

const words = ["lalka", "szczurek", "pirania", "szymon"]
const word = words[Math.floor(Math.random() * words.length)];

function xyz() {
    letters.innerHTML = `
        ${word
        .split('')
        .map(
            e => `
            <span class="border-b-4 border-white">
            ${e}
            </span>`
        )
        .join("")
    }`
}

xyz()




