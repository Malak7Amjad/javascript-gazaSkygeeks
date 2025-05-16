 let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

let deck = [
    '2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC',
    '2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD',
    '2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH',
    '2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS'
]

let cardsMap = {
    '2C':2,'3C':3,'4C':4,'5C':5,'6C':6,'7C':7,'8C':8,'9C':9,'10C':10,'JC':10,'QC':10,'KC':10,'AC':11,
    '2D':2,'3D':3,'4D':4,'5D':5,'6D':6,'7D':7,'8D':8,'9D':9,'10D':10,'JD':10,'QD':10,'KD':10,'AD':11,
    '2H':2,'3H':3,'4H':4,'5H':5,'6H':6,'7H':7,'8H':8,'9H':9,'10H':10,'JH':10,'QH':10,'KH':10,'AH':11,
    '2S':2,'3S':3,'4S':4,'5S':5,'6S':6,'7S':7,'8S':8,'9S':9,'10S':10,'JS':10,'QS':10,'KS':10,'AS':11
}

function getRandomCard() {
    let randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cardsMap[firstCard] + cardsMap[secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = '<div class="card-container">'
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += `<img src="cards/${cards[i]}.png" alt="${cards[i]}">`
    }
    cardsEl.innerHTML += '</div>'
    
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += cardsMap[card]
        renderGame()
    }
}
