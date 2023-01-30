const letters = document.getElementById("wordInput");
const final = document.getElementById("final");

const words = ["lalka", "szczurek", "pirania", "szymon"]
const word = words[Math.floor(Math.random() * words.length)];

const correct = ["i", "l", "s", "z", "y", "m", "o", "n"]
const wrong = []

function wordResult() {
    letters.innerHTML = `
        ${word
        .split('')
        .map(
            letter => `
            <span class="border-b-4 border-white">
            ${correct.includes(letter) ? letter : " "}
            </span>`
        )
        .join("")
    }`

    const innerWord = letters.innerText.replace(/\n/g, "")

    if(innerWord === word){
        final.innerText = "brawo kurwa"

    }
}

wordResult()




