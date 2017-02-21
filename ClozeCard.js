var inquirer = require("inquirer");
var clozeCardArray = [];
var cardCount = 0
function ClozeCard(text, cloze){
	
	this.cardHandler = function(){
		if (text.indexOf(close) === -1){
			console.log("Sorry but " + cloze + " is not in the current text.")
		} else {
		this.text = text;
		this.cloze = cloze;
		this.partialText = this.text.replace(this.cloze, '...');

		};
	
	};
};

clozeCardArray.push(new ClozeCard("George Washington was the first President of the United States?", "George Washington"), new ClozeCard("The most recent Super Bowl took place in the city of Houston?", "Houston"), new ClozeCard("2 + 2 = 4 ?", "4"), new clozeCardArray("A lemon is typically yellow in color.", "yellow")
	);

var askQuestion = function(){
	if (cardCount < clozeCardArray.length){
		inquirer.prompt([
		{
			name:"question",
			message: clozeCardArray[cardCount].partialText
		}
		]).then(function(answers){
			var useranswer = answer.question;
			var flashcardCloze = clozeCardArray[cardCount].cloze;

			if(useranswer.toLowerCase() === flashcardCloze){
				console.log("Yay!");
				cardCount++;
				askQuestion();
			}else{
				console.log("Oh too bad!");
				cardCount++
				askQuestion();
			}

		});
	}
};
askQuestion();