const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let lockBoard = false
let firstCard
let secondCard

function flipCard() {
	if (lockBoard) return
	if (this === firstCard) return
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
		firstCard.removeEventListener('click', flipCard)
		secondCard.removeEventListener('click', flipCard)
		console.log('ok')
	} else {
        lockBoard = true
		setTimeout(function () {
			firstCard.classList.remove('flip')
			secondCard.classList.remove('flip')
			reset()
		}, 1000)
	}
}

function reset() {
	hasFlippedCard = false
	lockBoard = false
	firstCard = null
	secondCard = null
}

cards.forEach(card => card.addEventListener('click', flipCard))
