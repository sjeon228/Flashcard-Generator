var BasicCard = require("./BasicCard");
//var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var basicResponse;
var frontCount = 0;
var backCount = 0;


function mainMenu(){
	inquirer.prompt([
	{
		type: "list",
		message: "Which type of flashcards would you like to use?",
		choices: ["Basic", "Cloze"],
		name: "choices"
	}
		]).then(function(answer){
			switch(answer.choices){
				case "Basic":
					basicFlash();
					break;
				case "Cloze":
					clozeFlash();
					break;
			}
		})
	
};

function basicFlash(){
	var basicArr = [
	new BasicCard("What year did Michael Jordan win his first title?", "1991"),
	new BasicCard("Which NBA team has the most titles?", "Boston Celtics"),
	new BasicCard("Who was the last team to win 3 consecutive championships?", "Los Angeles Lakers"),
	new BasicCard("Who was the first foreign player to be selected first overall in the draft?", "Yao Ming"),
	new BasicCard("Who scored the most points in a NBA playoff game?", "Michael Jordan with 63 points")
	];
	basicApp();

	function basicApp(){
		console.log("--------------------------------------------------------------");
		console.log(basicArr[frontCount].front);
			inquirer.prompt([
			{
				type: "list",
				message: "Flip the card?",
				choices: ["Yes"],
				name: "flip"
			}
			]).then(function(userResponse){
					console.log(basicArr[backCount].back);
					frontCount++;
					backCount++;
					if (frontCount < basicArr.length){
						basicApp();
					}
					else{
						console.log("You have completed the basic flashcards!");
						console.log("--------------------------------------------------------------");
						frontCount = 0;
						backCount = 0;
						mainMenu();
					}
			});
		
	};
};

mainMenu();





