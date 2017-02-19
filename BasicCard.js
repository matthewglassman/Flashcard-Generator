var inquirer = require ("inquirer");
var fs = require ("fs");
var basiccard = require ("./BasicCard.json");

function BasicCard(front1, front2, front3, front4){
	this.front1 = front1;
	this.front2 = front2;
	this.front3 = front3;
	this.front4 = front4;
}

var count = 0;

var flashCard = function(){
	if (count < 5) {
		inquirer.prompt([
		{
			name: "front1",
			message: "Who was the first President of the United States?"
		},
		{
			name: "front2",
			message: "Where did the Super Bowl take place?"
		},
		{
			name: "front3",
			message: "What is 2+2?"
		},
		{
			name: "front4",
			message: "What color is an apple?"
		}
		]).then(function(answers){
			var response = new BasicCard(
				answers.front1,
				answers.front2,
				answers.front3,
				answers.front4);
			response.printInfo();
			count++;
			flashCard();
		});
	}else{
		console.log("All questions asked");
	}
}
flashCard();