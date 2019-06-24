const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

let conjoinedWord = "";
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

let HTMLRepresentation = "";
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    HTMLRepresentation = `<h1>The Mod Squad</h1>`;

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]


let k = 0;
for (; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = true

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${k} total locations`)

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix;
    }

    return namer
}

nameMaker = llamaNamer()
console.log(nameMaker())
