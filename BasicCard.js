
function BasicCard (front, back){
	this.front = front;
	this.back = back;
	this.displayFront = function(){
		console.log(basicArr[frontCount].front);
		
	};
	this.displayBack = function(){
		console.log(basicArr[backCount].back);
		
	}
};



//console.log(basicArr[1].front);

//basicArr[0].displayFront();

module.exports = BasicCard;