const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let firstCard
let secondCard

function flipCard() {
	this.classList.add('flip')

	if (!hasFlippedCard) {
		hasFlippedCard = true
		firstCard = this
		console.log(firstCard, hasFlippedCard)
		return
	} else {
		hasFlippedCard = false
		secondCard = this
		console.log(secondCard, hasFlippedCard)
	}
    matchCard()
}

function matchCard() {
	if (firstCard.dataset.name === secondCard.dataset.name) {
		console.log('ok')
	} else {
		setTimeout(function () {
			firstCard.classList.remove('flip')
			secondCard.classList.remove('flip')
		}, 1000)
	}
}

cards.forEach(card => card.addEventListener('click', flipCard))
