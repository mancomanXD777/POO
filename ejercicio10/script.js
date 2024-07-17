let count = 0;
let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

function countCards() {
const cardInput = document.getElementById('card-input');
const card = cardInput.value.trim();
cardInput.value = '';

let result;
if (!isNaN(parseInt(card)) && parseInt(card) >= 2 && parseInt(card) <= 6) {
    count++;
    result = `${count} Bet`;
} else if (['10', 'J', 'Q', 'K', 'A'].includes(card.toUpperCase())) {
    count--;
    result = `${count} Hold`;
} else {
    result = `${count} Hold`;
}

document.getElementById('result').textContent = result;
}

function play() {
if (count > 0) {
    alert(`Bet! Current count: ${count}`);
} else {
    alert(`Hold. Current count: ${count}`);
}
}

function newDeck() {
count = 0;
deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
document.getElementById('result').textContent = `${count} Hold`;
}