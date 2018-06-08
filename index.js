function init() {
	var randomNumber = Math.floor(Math.random() * 12);
	var randomSuit = Math.floor(Math.random() * 4);
	buildCard(randomNumber, randomSuit);
}

function buildCard(number, suit) {
	var aux = number;
	var top = document.querySelector('.top');
	var bot = document.querySelector('.bot');
	
	if (suit == 0) {
		top.setAttribute('class', 'top heart');
		document.querySelector("mid").style.color = "red";
		document.querySelector("mid").innerHTML = aux;
		bot.setAttribute('class', 'bot heart');
	} else if (suit == 1) {
		top.setAttribute('class', 'top spade');
		document.querySelector("mid").style.color = "black";
		document.querySelector("mid").innerHTML = aux;
		bot.setAttribute('class', 'bot spade');
	} else if (suit == 2) {
		top.setAttribute('class', 'top diamo');
		document.querySelector("mid").style.color = "red";
		document.querySelector("mid").innerHTML = aux;
		bot.setAttribute('class', 'bot diamo');
	} else if (suit == 3) {
		top.setAttribute('class', 'top clubs');
		document.querySelector("mid").style.color = "black";
		document.querySelector("mid").innerHTML = aux;
		bot.setAttribute('class', 'bot clubs');
	}
}