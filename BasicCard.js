var inquirer = require ("inquirer");
var fs = require ("fs");
//var basiccard = require ("./BasicCard.json");
var basicCardArray = [];

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

//push questions and answers to an array to compare against a users input and to know when the quiz has ended.

basicCardArray.push(new BasicCard(".... was the first President of the United States?", "George Washington"), 
	new BasicCard("The most recent Super Bowl took place in the city of ....?", "Houston"),
	new BasicCard("2 + 2 = ....?", "Four"),
	new BasicCard("A Lemon is typically .... in color.", "Yellow")
	);
console.log(basicCardArray);
console.log(basicCardArray.length);

var cardCount = 0;

var askQuestion = function(){
	if (cardCount < basicCardArray.length){
		inquirer.prompt([
		{
			name:"Question",
			message: basicCardArray[cardCount].front
		}
		]).then(function(back){
			var answer = back.Question;
			if (answer.toLowerCase() === basicCardArray[cardCount].back.toLowercase()){
				console.log("Excellent!" + answer.toLowerCase() + " is correct!");
			}else{
				console.log("Oh too bad" + basicCardArray[cardCount].back + "was what we were looking for");
			}
				cardCount++;
				askQuestion();	
		});
	}
}
askQuestion();
// var card1 = new BasicCard (".... was the first President of the United States?", "George Washington");
// var card2 = new BasicCard ("The most recent Super Bowl took place in ....?", "Houston");
// var card3 = new BasicCard ("2+2 = ....?", "Four");
// var card4 = new BasicCard (".... is the color of a Macintosh Apple", "Red");

//var cardCount = 0;


// var count = 0;

// var flashCard = function(){
// 	if (count < 5) {
// 		inquirer.prompt([
// 		{
// 			name: "front",
// 			message: "Who was the first President of the United States?"
// 		},
// 		{
// 			name: "front",
// 			message: "Where did the Super Bowl take place?"
// 		},
// 		{
// 			name: "front",
// 			message: "What is 2+2?"
// 		},
// 		{
// 			name: "front",
// 			message: "What color is an apple?"
// 		}
// 		]).then(function(answers){
// 			var response = new BasicCard(
// 				answers.front1,
// 				answers.front2,
// 				answers.front3,
// 				answers.front4);
// 			response.printInfo();
// 			count++;
// 			flashCard();
// 		});
// 	}else{
// 		console.log("All questions asked");
// 	}
// }
// flashCard();