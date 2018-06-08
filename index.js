function init() {
	var randomNumber = Math.floor(Math.random() * 12 + 1);
	var randomSuit = Math.floor(Math.random() * 4);
	buildCard(randomNumber, randomSuit);
	return false;
}

function buildCard(number, suit) {
	var top = document.querySelector('.top');
	var bot = document.querySelector('.bot');
	console.log(number + ' ' + suit);
	
	if (number == 1){ number = 'A'};
	if (number == 11){ number = 'J'};
	if (number == 12){ number = 'Q'};
	if (number == 13){ number = 'K'};
	
	
	if (suit == 0) {
		top.setAttribute('class', 'top heart');
		bot.setAttribute('class', 'bot heart');
		document.querySelector('.mid').innerHTML = number;
		document.querySelector('.mid').style.color = 'red';
	} else if (suit == 1) {
		top.setAttribute('class', 'top spade');
		bot.setAttribute('class', 'bot spade');
		document.querySelector('.mid').innerHTML = number;
		document.querySelector('.mid').style.color = 'black';
	} else if (suit == 2) {
		top.setAttribute('class', 'top diamo');
		bot.setAttribute('class', 'bot diamo');
		document.querySelector('.mid').innerHTML = number;
		document.querySelector('.mid').style.color = 'red';
	} else if (suit == 3) {
		top.setAttribute('class', 'top clubs');
		bot.setAttribute('class', 'bot clubs');
		document.querySelector('.mid').innerHTML = number;
		document.querySelector('.mid').style.color = 'black';
	}
	return false;
}

document.querySelector('.main').addEventListener('click', init);