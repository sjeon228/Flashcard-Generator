var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var basicResponse;
var Count = 0;



function mainMenu(){
	console.log("--------------------------------------------------------------");
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
		console.log(basicArr[Count].front);
			inquirer.prompt([
			{
				type: "list",
				message: "Flip the card?",
				choices: ["Yes"],
				name: "flip"
			}
			]).then(function(userResponse){
					console.log(basicArr[Count].back);
					console.log("--------------------------------------------------------------");
					Count++;
					if (Count < basicArr.length){
						inquirer.prompt([
						{
							type: "list",
							message: "Next Card?",
							choices: ["Yes", "Main Menu"],
							name: "next"
						}
						]).then(function(userResponse){
							switch(userResponse.next){
								case "Yes":
									basicApp();
									break;
								case "Main Menu":
									mainMenu();
									Count = 0;
									break;
							}
						});
					}
					else{
						console.log("--------------------------------------------------------------");
						console.log("You have completed the basic flashcards!");
						console.log("--------------------------------------------------------------");
						Count = 0;
						mainMenu();
					}
			});
		
	};
};

function clozeFlash(){
	var clozeArr = [
	new ClozeCard("Ray Allen", " has made the most 3 pointers in NBA history."),
	new ClozeCard("Wilt Chamberlain", " has scored the most points in a game in NBA history."),
	new ClozeCard("The Golden State Warriors", " won the 2017 NBA championship."),
	new ClozeCard("Jerry West", " is the man portrayed in the NBA logo."),
	new ClozeCard("Russel Westbrook", " won the 2017 NBA MVP award.")
	];
	clozeApp();

	function clozeApp(){
		console.log("--------------------------------------------------------------");
		console.log("..." + clozeArr[Count].partial);
			inquirer.prompt([
			{
				type: "list",
				message: "Flip the card?",
				choices: ["Yes"],
				name: "flip"
			}
			]).then(function(userResponse){
					console.log(clozeArr[Count].cloze);
					console.log("--------------------------------------------------------------");
					
			inquirer.prompt([
			{
				type: "list",
				message: "Show the completed sentence?",
				choices: ["Yes"],
				name: "completed"
			}
			]).then(function(userResponse){
					console.log(clozeArr[Count].fulltext);
					console.log("--------------------------------------------------------------");
					Count++;

					if (Count < clozeArr.length){
						inquirer.prompt([
						{
							type: "list",
							message: "Next Card?",
							choices: ["Yes", "Main Menu"],
							name: "next"
						}
						]).then(function(userResponse){
							switch(userResponse.next){
								case "Yes":
									clozeApp();
									break;
								case "Main Menu":
									mainMenu();
									Count = 0;
									break;
							}
						});

					}
					else{
						console.log("--------------------------------------------------------------");
						console.log("You have completed the cloze deleted flashcards!");
						console.log("--------------------------------------------------------------");
						Count = 0;
						mainMenu();
					}
			});
		});
	}

};

mainMenu();





