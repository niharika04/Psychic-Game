
		var computerChoice = [];

		for(var letter=97; letter<123; letter++) {
			var computerOption = String.fromCharCode(letter);
			computerChoice.push(computerOption);
		} 

		console.log(computerChoice)
		// var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();

			
		// 	for (char letter = 'A'; letter <= 'Z'; letter++) {
		// 	     Debug.WriteLine(letter);
		// 	}
		// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var wins = 0;
		var losses = 0;
		var guessesLeft = 0;
		function startAgain() {
				
				guessesLeft = 9;
				computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)];
			}
		startAgain();
		document.onkeyup = function(event) {
			var userGuess = event.key;
			var computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)];
			console.log(computerGuess);
			if (userGuess === computerGuess) {
				wins++;
				startAgain();

			} else  {
				guessesLeft--;
				if (guessesLeft === 0) {
					losses++;
					startAgain();

				} 
			} 
			var html = 
				"<h2>The Psychic Game</h2>" +
				 "<p>Wins: " + wins + "</p>" +
				"<p>Losses: " + losses + "</p>" +
				"<p>Guesses Left: " + guessesLeft + "</p>";
				document.querySelector("#game").innerHTML= html;
			// if (guessesLeft === 0)	{
			// 	document.querySelector("#game").innerHTML = "<p>No guesses left - you lost!</p>"

			// }
					
		};
	